import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServicesInfo/ClienteServices";

const ClienteServicesGetController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ status: "Missing required fields", userId });
    }

    const get = await ClienteServices.getServicesInfo(userId);

    return res.status(200).json({ status: "Service info get", get });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ClienteServicesGetController;
