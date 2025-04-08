import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoGet = async (req: Request, res: Response) => {
  try {
    const {
      nombre_producto
    } = req.query;
    
    const getProducto = await ProductoServices.ProductoGet(nombre_producto as string);
    return res.status(201).json(
        { status: 'Consult ok', data: getProducto}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ProductoGet;