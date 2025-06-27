import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";

const EmpleadoGetAllEmails = async (req: Request, res: Response) => {
    try {
        const correos = await EmpleadoServices.getAllEmails();
        return res.status(200).json({
            status: "get all employee emails ok",
            data: correos,
        });
    } catch (error) {
        console.error("Error al obtener correos de empleados:", error);
        return res.status(500).json({
            status: "error",
            message: "No se pudieron obtener los correos",
        });
    }
};

export default EmpleadoGetAllEmails;
