import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

let AdministradorGet = async (req: Request, res: Response) => {
    try {
        const { correo_admin } = req.body;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!correo_admin) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const cliente = await AdministradorServices.AdministradorGet(correo_admin);
    
        if (!cliente) {
        return res.status(404).json({ status: 'Empleado not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: cliente });
    } catch (error: any) {
        console.error("Error en la obtención del empleado:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default AdministradorGet;