import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";
import ProductoNI from "../../Dto/ProductoDto/ProductoNIDto";

let ProductoUpdateNI = async (req: Request, res: Response) => {
  try {
    const {
       nuevo_nombre_producto,
       descripcion_producto,
       precio_producto,
       stock,
       descuento,
       fecha_descuento,
       nombre_producto
    } = req.body;

    const updateProductoNI = await ProductoServices.ProductoUpdateNI(new ProductoNI(nuevo_nombre_producto, descripcion_producto, precio_producto, stock, descuento, fecha_descuento), nombre_producto as string);

    return res.status(201).json(
        { status: 'update ok'}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ProductoUpdateNI;