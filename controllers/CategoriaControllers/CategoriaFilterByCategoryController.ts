import { Request, Response } from "express";
import CategoriaServices from "../../services/CategoriaServices";

let filterByCategory = async (req: Request, res: Response) => {
  try {
    const { nombre_categoria } = req.query;

    if (!nombre_categoria || typeof nombre_categoria !== "string") {
      return res.status(400).json({ status: "Invalid or missing nombre_producto" });
    }

    const categoria = await CategoriaServices.CategoriaByName(nombre_categoria);
    return res.status(200).json({ status: "filter ok", data: categoria });
  } catch (error: any) {
    console.error("Error en el filtro por nombre:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default filterByCategory;