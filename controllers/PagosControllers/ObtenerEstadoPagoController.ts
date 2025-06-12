import { Request, Response } from 'express';
import { consultarEstadoPago } from '../../services/PagosServices/PagoPseService';

export const obtenerEstadoPago = async (req: Request, res: Response) => {
  const { refPayco } = req.params;

  try {
    if (!refPayco) {
      return res.status(400).json({ error: "Falta el parámetro refPayco" });
    }

    const estadoPago = await consultarEstadoPago(refPayco);
    res.json(estadoPago);
  } catch (error: any) {
    console.error("Error al obtener estado de pago:", error);
    res.status(500).json({ error: error.message || 'Error desconocido' });
  }
};