import { Request, Response } from "express";
import CategoriaServices from "../../services/CategoriaServices";

const CategoriaGetAllNames = async (req: Request, res: Response) => {
  try {
    const nombres = await CategoriaServices.getAllNames();
    return res.status(200).json({
      status: "get all category names ok",
      data: nombres,
    });
  } catch (error) {
    console.error("Error al obtener nombres de categorías:", error);
    return res.status(500).json({
      status: "error",
      message: "No se pudieron obtener los nombres de las categorías",
    });
  }
};

export default CategoriaGetAllNames;
