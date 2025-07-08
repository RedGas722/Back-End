import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

let AdministradorChangePassword = async (req: Request, res: Response) => {
    try {

        const id  = req.body.id; 

        const { 
         contraseña_admin
        } = req.body;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!contraseña_admin) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const changePassword = await AdministradorServices.AdminChangePassword(id as number, contraseña_admin as string)
    
        if (!changePassword) {
        return res.status(404).json({ status: 'admin not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: changePassword });
    } catch (error: any) {
        console.error("Error en la obtención del admin:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default AdministradorChangePassword;
