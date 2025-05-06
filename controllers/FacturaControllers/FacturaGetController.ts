import { Request, Response } from "express";
import FacturaServices from "../../services/FacturaServices";

let FacturaGet = async (req: Request, res: Response) => {
    try {
        const { id_cliente } = req.query;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!id_cliente) {
            return res.status(400).json({ status: 'Missing required fields' });
        }
        
        const idCliente = parseInt(id_cliente as string, 11);
        
        const factura = await FacturaServices.FacturaGet(idCliente);
    
        if (!factura) {
            return res.status(404).json({ status: 'Factura not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: factura });
    } catch (error: any) {
        console.error("Error en la obtención de la factura:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
};

export default FacturaGet;
