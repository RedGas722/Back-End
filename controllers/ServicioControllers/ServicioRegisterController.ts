import { Request, Response } from "express";
import Servicio from "../../Dto/ServicioDto/ServicioDto";
import ServicioServices from "../../services/ServicioServices";

let ServicioRegister = async (req: Request, res: Response) => {
  try {
    const {
      nombre_servicio,
      descripcion_servicio,
      precio_servicio,
      precio_total
    } = req.body;
    const registerServicio = await ServicioServices.ServicioRegister(new Servicio(nombre_servicio, descripcion_servicio, precio_servicio, precio_total));
    return res.status(201).json(
        { status: 'register ok'}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ServicioRegister;