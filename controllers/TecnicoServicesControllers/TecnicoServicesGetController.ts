import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServicesInfo/TecnicoServices";

const TecnicoServicesGetController = async (req: Request, res: Response) => {
  try {

    const { 
      technicianId
     } = req.body;

    if (!technicianId) {
      return res.status(400).json({ status: "Missing required fields", technicianId});
    }

    const get = await TecnicoServices.getServicesInfo(technicianId);

    return res.status(200).json({ status: "Service info get", get });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default TecnicoServicesGetController;
