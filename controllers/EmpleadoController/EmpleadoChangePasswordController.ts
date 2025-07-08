import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";

let EmpleadoChangePassword = async (req: Request, res: Response) => {
    try {

        const id  = req.body.id; 

        const { 
         contraseña_empleado
        } = req.body;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!contraseña_empleado) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const changePassword = await EmpleadoServices.EmpleadoChangePassword(id as number, contraseña_empleado as string)
    
        if (!changePassword) {
        return res.status(404).json({ status: 'empleado not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: changePassword });
    } catch (error: any) {
        console.error("Error en la obtención del empleado:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default EmpleadoChangePassword;
