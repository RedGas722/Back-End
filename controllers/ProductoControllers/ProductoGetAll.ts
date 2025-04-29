import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let  ProductoGetAll = async (req: Request, res: Response) => {
  try {
    const {
    
    } = req.query;
    
    const ProductoGetAll = await ProductoServices.ProductoGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: ProductoGetAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ProductoGetAll;