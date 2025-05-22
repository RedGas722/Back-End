import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

const ProductoGetAllCategoria = async (req: Request, res: Response) => {
  const { nombre_categoria } = req.query;

  if (!nombre_categoria || typeof nombre_categoria !== 'string') {
    return res.status(400).json({ error: "Parámetro 'nombre_categoria' es requerido." });
  }

  try {
    const productos = await ProductoServices.getAllProductoCategoria(nombre_categoria);
    return res.json({
      status: "Consult ok",
      data: productos,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message || "Error inesperado",
    });
  }
};

export default ProductoGetAllCategoria;
