import { Request, Response } from "express";
import CarritoProducto from "../../Dto/CarritoProductoDto/CarritoProductoDto";
import CarritoProductoServices from "../../services/CarritoProductoServices";


let CarritoProductoRegister = async (req: Request, res: Response) => {
  try {
    const {
      id_carrito,
      id_producto
    } = req.body;
    const registerCarritoProducto = await CarritoProductoServices.CarritoProductoRegister(new CarritoProducto(id_carrito, id_producto))
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default CarritoProductoRegister;