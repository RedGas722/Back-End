import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

const ProductoGetAllCategoria = async (req: Request, res: Response) => {
  const { nombre_categoria } = req.query;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  if (!nombre_categoria || typeof nombre_categoria !== 'string') {
    return res.status(400).json({ error: "Parámetro 'nombre_categoria' es requerido." });
  }

  try {
    const resultado = await ProductoServices.getAllProductoCategoria(nombre_categoria, page, limit);
    return res.status(200).json({
      status: "Consulta exitosa",
      data: resultado,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message || "Error inesperado",
    });
  }
};

export default ProductoGetAllCategoria;
