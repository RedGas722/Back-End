import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoDelete = async (req: Request, res: Response) => {
  try {
    const {
      nombre_producto
    } = req.query;
    
    const deleteProducto = await ProductoServices.ProductoDelete(nombre_producto as string);
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

export default ProductoDelete;