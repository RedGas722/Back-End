import { Request, Response } from "express";
import ServicioServices from "../../services/ServicioServices";

let ServicioDelete = async (req: Request, res: Response) => {
  try {
    const {
      nombre_servicio
    } = req.body;
    const deleteServicio = await ServicioServices.ServicioDelete(nombre_servicio as string);
    return res.status(201).json(
        { status: 'delete ok'}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ServicioDelete;