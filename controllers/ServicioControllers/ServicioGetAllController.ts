import { Request, Response } from "express";
import ServicioServices from "../../services/ServicioServices";

let ServicioGetAll = async (req: Request, res: Response) => {
  try {
    const {
    
    } = req.query;
    
    const getServicioAll = await ServicioServices.ServicioGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: getServicioAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ServicioGetAll;