import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServicesInfo/ClienteServices";

const ClienteServicesGetAllController = async (req: Request, res: Response) => {
  try {

    const get = await ClienteServices.getAllServicesInfo();

    return res.status(200).json({ status: "Service info get", get });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ClienteServicesGetAllController;
