import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";

const ClienteGetAllEmails = async (req: Request, res: Response) => {
    try {
        const correos = await ClienteServices.getAllEmails();
        return res.status(200).json({
            status: "get all client emails ok",
            data: correos,
        });
    } catch (error) {
        console.error("Error al obtener correos de clientes:", error);
        return res.status(500).json({
            status: "error",
            message: "No se pudieron obtener los correos",
        });
    }
};

export default ClienteGetAllEmails;
