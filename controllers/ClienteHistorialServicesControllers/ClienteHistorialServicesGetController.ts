import { Request, Response } from "express";
import ClienteHistorialServices from "../../services/ClienteHistotailSevicesInfo/ClienteHistorialServices";

const ClienteHistorialServicesGetController = async (req: Request, res: Response) => {
  try {
    const {
      id
    } = req.body;
    
    if (!id) {
      return res.status(400).json({ status: "Missing required fields", id });
    }

    const get = await ClienteHistorialServices.getServicesInfo(id);

    return res.status(200).json({ status: "Service info get", get });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ClienteHistorialServicesGetController;
