import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoUpdateStock = async (req: Request, res: Response) => {
  try {
    const {
       id_producto,
       stock
    } = req.body;

    const updateProductoNI = await ProductoServices.ProductoUpdateStock( stock, id_producto);

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

export default ProductoUpdateStock;