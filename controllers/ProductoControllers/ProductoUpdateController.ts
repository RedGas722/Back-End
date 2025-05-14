import { Request, Response } from "express";
import multer from "multer";
import ProductoServices from "../../services/ProductoServices";
import Producto from "../../Dto/ProductoDto/ProductoDto";


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }) 

let ProductoUpdate = async (req: Request, res: Response) => {
  try {
    const {
       nuevo_nombre_producto,
       descripcion_producto,
       precio_producto,
       stock,
       nombre_producto
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo de imagen.' })
    }

    const imagenBuffer = req.file.buffer;
    const updateProducto = await ProductoServices.ProductoUpdate(new Producto(nuevo_nombre_producto, descripcion_producto, precio_producto, stock, imagenBuffer ), nombre_producto as string);

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

export default ProductoUpdate;