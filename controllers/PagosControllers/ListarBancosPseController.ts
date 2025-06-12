import { Request, Response } from 'express';
import { obtenerBancosPSE } from '../../services/PagosServices/PagoPseService';

export const listarBancosPSE = async (req: Request, res: Response) => {
    try {
        const bancos = await obtenerBancosPSE();
        res.json(bancos);
    } catch (error) {
        console.error("Error al obtener bancos PSE:", error);
        res.status(500).json({ error: 'Error al obtener los bancos PSE' });
    }
};
