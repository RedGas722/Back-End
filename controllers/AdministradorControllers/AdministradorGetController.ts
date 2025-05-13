import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

let AdministradorGet = async (req: Request, res: Response) => {
    try {
        const { correo_admin } = req.query;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!correo_admin) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const admin = await AdministradorServices.AdministradorGet(correo_admin as string);
    
        if (!admin) {
        return res.status(404).json({ status: 'Administrador not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: admin });
    } catch (error: any) {
        console.error("Error en la obtención del administrador:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default AdministradorGet;