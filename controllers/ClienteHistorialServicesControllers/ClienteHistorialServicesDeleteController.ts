import { Request, Response } from "express";
import ClienteHistorialServices from "../../services/ClienteHistotailSevicesInfo/ClienteHistorialServices";

const ClienteHistorialServicesDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.body.userId;
    
    if (!id) {
      return res.status(400).json({ status: "Missing required fields", id });
    }

    const deleted = await ClienteHistorialServices.removeServiceInfo(id);

    return res.status(200).json({ status: "Service info Deleted", deleted });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ClienteHistorialServicesDeleteController;
