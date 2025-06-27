import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";

const TecnicoGetAllEmails = async (req: Request, res: Response) => {
  try {
    const correos = await TecnicoServices.getAllEmails();
    return res.status(200).json({
      status: "get all tecnico emails ok",
      data: correos,
    });
  } catch (error) {
    console.error("Error al obtener correos de técnicos:", error);
    return res.status(500).json({
      status: "error",
      message: "No se pudieron obtener los correos de los técnicos",
    });
  }
};

export default TecnicoGetAllEmails;
