import { Request, Response } from "express";
import CarritoServicioServices from "../../services/CarritoServicioServices";


let CarritoServicioDelete = async (req: Request, res: Response) => {
  try {
    const {
      id_carrito_servicio,
    } = req.query;

    const idCarritoServicio = parseInt(id_carrito_servicio as string , 10);

    const deleteCarritoServicio = await CarritoServicioServices.CarritoServicioDelete(idCarritoServicio)
    return res.status(201).json(
      { status: 'delete ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default CarritoServicioDelete;