import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServicesInfo/ClienteServices";

const ClienteServicesAddController = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name; 
    const phone = req.body.telefono;
    const address = req.body.direccion;
    const email = req.body.email;

    const { itemInfo } = req.body;

    if (!id || !name || !phone || !address || !email || !itemInfo) {
      return res.status(400).json({ status: "Missing required fields", id, name, phone, address, email, itemInfo });
    }

    const added = await ClienteServices.addToServicesInfo(id, name, phone, address, email, JSON.stringify(itemInfo));

    if (!added) {
      return res.status(409).json({ status: "Service info already exists for this user" });
    }

    return res.status(200).json({ status: "Service info added", id, itemInfo });
  } catch (error: any) {
    console.error("Error en ClienteServicesAddController:", error);
    return res.status(500).json({ status: "Internal server error", error: error.message });
  }
};

export default ClienteServicesAddController;
