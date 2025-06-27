import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";

const ClienteGet = async (req: Request, res: Response) => {
  try {
    const { correo_cliente } = req.query;

    // Validación del query param
    if (!correo_cliente || typeof correo_cliente !== 'string') {
      return res.status(400).json({
        status: 'error',
        error: 'El parámetro "correo_cliente" es requerido y debe ser una cadena.'
      });
    }

    const cliente = await ClienteServices.GetCliente(correo_cliente);

    if (!cliente) {
      return res.status(404).json({
        status: 'not found',
        error: `No se encontró ningún cliente con el correo: ${correo_cliente}`
      });
    }

    return res.status(200).json({
      status: 'get ok',
      data: cliente
    });

  } catch (error: any) {
    console.error("Error en la obtención del cliente:", error);
    return res.status(500).json({
      status: 'error',
      error: 'Error interno del servidor: ' + error.message
    });
  }
};

export default ClienteGet;
