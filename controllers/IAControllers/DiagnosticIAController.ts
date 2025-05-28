import { Request, Response } from 'express';
import { obtenerDiagnostico } from '../../services/GeminiApiServices';

const diagnosticar = async (req: Request, res: Response) => {
  try {
    const { descripcion } = req.body;

    if (!descripcion) {
      return res.status(400).json({ error: 'Se requiere una descripción del problema.' });
    }

    const respuestaTexto = await obtenerDiagnostico(descripcion);
    const jsonLimpio = respuestaTexto.replace(/```json|```/g, '').trim();

    let respuesta: any;
    try {
      respuesta = JSON.parse(jsonLimpio);
    } catch (parseError) {
      return res.status(500).json({ error: 'La respuesta del modelo no fue un JSON válido.', raw: respuestaTexto });
    }

    res.status(200).json({ resultado: respuesta });
  } catch (error: any) {
    console.error('Error al obtener diagnóstico:', error);
    res.status(500).json({ error: error.message || 'Error interno' });
  }
};

export default diagnosticar;