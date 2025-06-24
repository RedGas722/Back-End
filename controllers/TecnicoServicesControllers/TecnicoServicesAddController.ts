import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServicesInfo/TecnicoServices";

const TecnicoServicesAddController = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name; 
    const phone = req.body.telefono;
    const email = req.body.email

    const { 
      userId 
   } = req.body;

    if (!id || !name || !phone || !email || !userId) {
      return res.status(500).json({ status: "Internal server error" });
    }

    const added = await TecnicoServices.addToServicesInfo(id, name, phone, email, userId);

    if (!added) {
      return res.status(409).json({ status: "Service info already exists for this user" });
    }

    return res.status(200).json({ status: "Service info added", id, userId });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default TecnicoServicesAddController;
