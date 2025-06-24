import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServicesInfo/TecnicoServices";

const TecnicoServicesDeleteController = async (req: Request, res: Response) => {
   try {

      const {
         userId
      } = req.body;

      if (!userId) {
         return res.status(500).json({ status: "Internal server error" });
      }

      const deleted = await TecnicoServices.removeServiceInfo(userId);

      return res.status(200).json({ status: "Service info added", deleted });
   } catch (error: any) {
      console.error("Error en ClienteServicesAddController:", error);
      return res.status(500).json({ status: "Internal server error", error: error.message });
   }
};

export default TecnicoServicesDeleteController;
