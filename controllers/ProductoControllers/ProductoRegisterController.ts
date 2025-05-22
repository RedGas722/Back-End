import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";
import Producto from "../../Dto/ProductoDto/ProductoDto";

const ProductoRegister = async (req: Request, res: Response) => {
  try {
    const {
      nombre_producto,
      descripcion_producto,
      precio_producto,
      stock
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo de imagen.' });
    }

    const imagenBuffer = req.file.buffer;

    const producto = new Producto(
      nombre_producto,
      descripcion_producto,
      parseFloat(precio_producto),
      parseInt(stock),
      imagenBuffer
    );

    await ProductoServices.ProductoRegister(producto);

    return res.status(201).json({ status: 'register ok' });

  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default ProductoRegister;
