import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServicesInfo/ClienteServices";

const ClienteServicesDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;

    if (!id) {
      return res.status(400).json({ status: "Missing required fields", id });
    }

    const deleted = await ClienteServices.removeServiceInfo(id);

    return res.status(200).json({ status: "Service info added", id });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ClienteServicesDeleteController;
