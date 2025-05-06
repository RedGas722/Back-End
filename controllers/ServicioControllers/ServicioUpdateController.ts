import { Request, Response } from "express";
import Servicio from "../../Dto/ServicioDto/ServicioDto";
import ServicioServices from "../../services/ServicioServices";

let ServicioUpdate = async (req: Request, res: Response) => {
  try {
    const {
      nombre_servicio,
      nuevo_nombre_servicio,
      descripcion_servicio,
      precio_servicio,
      precio_total
    } = req.body;
    const registerUpdate = await ServicioServices.ServicioUpdate(
      new Servicio(
         nombre_servicio, 
         descripcion_servicio, 
         precio_servicio, 
         precio_total
        ),
         nuevo_nombre_servicio as string
      );
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

export default ServicioUpdate;