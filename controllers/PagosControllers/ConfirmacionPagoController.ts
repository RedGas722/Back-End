import { Request, Response } from 'express';
import { procesarConfirmacionPSE } from '../../services/PagosServices/PagoPseService';

export const confirmarPagoPSE = async (req: Request, res: Response) => {
    try {
        console.log("Confirmación PSE recibida:", req.body);
        await procesarConfirmacionPSE(req.body);
        res.sendStatus(200);  
    } catch (error) {
        console.error("Error al procesar confirmación PSE:", error);
        res.status(500).json({ error: 'Error al procesar confirmación PSE' });
    }
};
