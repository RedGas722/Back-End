import { Request, Response } from "express";
import ServicioServices from "../../services/ServicioServices";

const ServicioGetAllNames = async (req: Request, res: Response) => {
  try {
    const nombres = await ServicioServices.getAllNames();
    return res.status(200).json({
      status: "get all service names ok",
      data: nombres,
    });
  } catch (error) {
    console.error("Error al obtener nombres de servicios:", error);
    return res.status(500).json({
      status: "error",
      message: "No se pudieron obtener los nombres de los servicios",
    });
  }
};

export default ServicioGetAllNames;
