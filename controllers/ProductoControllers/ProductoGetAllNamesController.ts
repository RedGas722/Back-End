import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

const ProductoGetAllNames = async (req: Request, res: Response) => {
  try {
    const nombres = await ProductoServices.getAllNames();
    return res.status(200).json({
      status: "get all product names ok",
      data: nombres,
    });
  } catch (error) {
    console.error("Error al obtener nombres de productos:", error);
    return res.status(500).json({
      status: "error",
      message: "No se pudieron obtener los nombres de los productos",
    });
  }
};

export default ProductoGetAllNames;
