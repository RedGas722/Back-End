import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoFilterByName = async (req: Request, res: Response) => {
  try {
    const { nombre_producto } = req.query;

    if (!nombre_producto || typeof nombre_producto !== "string") {
      return res.status(400).json({ status: "Invalid or missing nombre_producto" });
    }

    const productos = await ProductoServices.ProductoFilterByName(nombre_producto);
    return res.status(200).json({ status: "filter ok", data: productos });
  } catch (error: any) {
    console.error("Error en el filtro por nombre:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ProductoFilterByName;