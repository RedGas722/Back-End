import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";

let TecnicoChangePassword = async (req: Request, res: Response) => {
    try {

        const id  = req.body.id; 

        const { 
         contraseña_tecnico
        } = req.body;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!contraseña_tecnico) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const changePassword = await TecnicoServices.TecnicoChangePassword(id as number, contraseña_tecnico as string)
    
        if (!changePassword) {
        return res.status(404).json({ status: 'tecnico not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: changePassword });
    } catch (error: any) {
        console.error("Error en la obtención del tecnico:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default TecnicoChangePassword;
