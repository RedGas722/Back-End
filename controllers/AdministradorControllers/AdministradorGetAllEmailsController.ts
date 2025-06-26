import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

const AdministradorGetAllEmails = async (req: Request, res: Response) => {
    try {
        const correos = await AdministradorServices.getAllEmails();
        return res.status(200).json({
            status: "get all emails ok",
            data: correos,
        });
    } catch (error) {
        console.error("Error al obtener correos de administradores:", error);
        return res.status(500).json({
            status: "error",
            message: "No se pudieron obtener los correos",
        });
    }
};

export default AdministradorGetAllEmails;