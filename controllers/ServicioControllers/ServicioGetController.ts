import { Request, Response } from "express";
import ServicioServices from "../../services/ServicioServices";

let ServicioGet = async (req: Request, res: Response) => {
  try {
    const {
      nombre_servicio
    } = req.query;
    
    const getServicio = await ServicioServices.ServicioGet(nombre_servicio as string);
    return res.status(201).json(
        { status: 'Consult ok', data: getServicio}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ServicioGet;