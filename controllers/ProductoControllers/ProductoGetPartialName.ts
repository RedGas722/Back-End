// controllers/ProductoControllers/ProductoBuscarPorNombre.ts
import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

const ProductoGetPartialName = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Falta el parámetro 'query'" });
    }

    const productos = await ProductoServices.ProductoGetPartialName(query);

    if (Array.isArray(productos) && productos.length > 0) {
      res.status(200).json({
        status: "Consulta exitosa",
        data: productos,
      });
    } else {
      res.status(404).json({ error: "No se encontraron productos" });
    }
  } catch (error: any) {
    console.error("Error en ProductoGetPartialName:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default ProductoGetPartialName;
