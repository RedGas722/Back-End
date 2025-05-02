import { Request, Response } from "express";
import CarritoProductoServices from "../../services/CarritoProductoServices";


let CarritoProductoDelete = async (req: Request, res: Response) => {
  try {
    const {
      id_carrito_producto,
    } = req.query;

    const idCarritoProducto = parseInt(id_carrito_producto as string , 10);

    const deleteCarritoProducto = await CarritoProductoServices.CarritoProductoDelete(idCarritoProducto);
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


export default CarritoProductoDelete;