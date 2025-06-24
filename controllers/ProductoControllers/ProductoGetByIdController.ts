import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoGetById = async (req: Request, res: Response) => {
  try {
    const id_producto = parseInt(req.query.id_producto as string);
    const producto = await ProductoServices.ProductoGetbyId(id_producto);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    return res.json({ data: producto });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default ProductoGetById;