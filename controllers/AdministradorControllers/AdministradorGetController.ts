import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

const AdministradorGet = async (req: Request, res: Response) => {
  try {
    const { correo_admin } = req.query;

    if (!correo_admin || typeof correo_admin !== 'string') {
      return res.status(400).json({
        status: 'error',
        error: 'El parámetro "correo_admin" es requerido y debe ser una cadena.'
      });
    }

    const admin = await AdministradorServices.AdministradorGet(correo_admin);

    if (!admin) {
      return res.status(404).json({
        status: 'not found',
        error: `No se encontró ningún administrador con el correo: ${correo_admin}`
      });
    }

    return res.status(200).json({
      status: 'get ok',
      data: admin
    });

  } catch (error: any) {
    console.error("Error en la obtención del administrador:", error);
    return res.status(500).json({
      status: 'error',
      error: 'Error interno del servidor: ' + error.message
    });
  }
};

export default AdministradorGet;
