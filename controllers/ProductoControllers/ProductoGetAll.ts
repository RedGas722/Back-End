import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";
import CategoriaServices from "../../services/CategoriaServices";

let ProductoGetAll = async (req: Request, res: Response) => {
  try {
    const productos = await ProductoServices.ProductoGetAll();
    const categorias = await CategoriaServices.GetAllCategorias();

    return res.json({
      status: "Consult ok",
      data: {
        productos,
        categorias
      }
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Error inesperado" });
  }
};

export default ProductoGetAll;
