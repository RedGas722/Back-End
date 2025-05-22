import { Request, Response } from 'express';
import { obtenerDiagnostico } from '../../services/GeminiApiServices';

const diagnosticar = async (req: Request, res: Response) => {
  try {
    const { descripcion } = req.body;

    if (!descripcion) {
      return res.status(400).json({ error: 'Se requiere una descripción del problema.' });
    }

    const respuesta = await obtenerDiagnostico(descripcion);

    res.status(200).json({ resultado: respuesta });
  } catch (error: any) {
    console.error('Error al obtener diagnóstico:', error);
    res.status(500).json({ error: error.message || 'Error interno' });
  }
};

export default diagnosticar;