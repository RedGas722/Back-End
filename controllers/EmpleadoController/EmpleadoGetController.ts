import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";

let EmpleadoGet = async (req: Request, res: Response) => {
    try {
        const { correo_empleado } = req.body;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!correo_empleado) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const empleado = await EmpleadoServices.GetEmpleado(correo_empleado as string);
    
        if (!empleado) {
        return res.status(404).json({ status: 'Empleado not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: empleado });
    } catch (error: any) {
        console.error("Error en la obtención del empleado:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default EmpleadoGet;
