import { Request, Response } from "express";
import ClienteHistorialServices from "../../services/ClienteHistotailSevicesInfo/ClienteHistorialServices";

const ClienteHistorialServicesAddController = async (req: Request, res: Response) => {
   try {

      const {id,
         descriptionTech,
         totalPrice,
         state,
         itemInfo 
      } = req.body;

      if (!itemInfo) {
         return res.status(400).json({ status: "Missing required fields", id, descriptionTech, totalPrice, state, itemInfo });
      }

      const added = await ClienteHistorialServices.addToServicesInfo(id, descriptionTech, totalPrice, state, JSON.stringify(itemInfo));

      if (!added) {
         return res.status(409).json({ status: "Service info already exists for this user" });
      }

      return res.status(200).json({ status: "Service info added", id, itemInfo });
   } catch (error: any) {
      console.error("Error en ClienteServicesAddController:", error);
      return res.status(500).json({ status: "Internal server error", error: error.message });
   }
};

export default ClienteHistorialServicesAddController;
