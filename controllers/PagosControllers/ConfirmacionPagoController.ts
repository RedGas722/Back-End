import { Request, Response } from 'express';
import { procesarConfirmacionPSE } from '../../services/PagosServices/PagoPseService';

export const confirmarPagoPSE = async (req: Request, res: Response) => {
    try {
        await procesarConfirmacionPSE(req.body);
        res.sendStatus(200);  // ePayco espera un 200 OK
    } catch (error) {
        console.error("Error al procesar confirmación PSE:", error);
        res.status(500).json({ error: 'Error al procesar confirmación PSE' });
    }
};
