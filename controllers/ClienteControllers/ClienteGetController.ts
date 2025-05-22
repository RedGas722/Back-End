import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";

let ClienteGet = async (req: Request, res: Response) => {
    try {
        const { correo_cliente } = req.query;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!correo_cliente) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const cliente = await ClienteServices.GetCliente(correo_cliente as string);
    
        if (!cliente) {
        return res.status(404).json({ status: 'Cliente not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: cliente });
    } catch (error: any) {
        console.error("Error en la obtención del cliente:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default ClienteGet;
