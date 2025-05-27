import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

let AdministradorGetAll = async (req: Request, res: Response) => {
    try {
        const admins = await AdministradorServices.AdministradorGetAll();
        return res.status(200).json({ status: 'get all ok', data: admins });
    } catch (error: any) {
        console.error("Error en la obtención de administradores:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
}

export default AdministradorGetAll;