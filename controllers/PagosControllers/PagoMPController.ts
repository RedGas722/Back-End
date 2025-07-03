import { Request, Response } from "express";
import PagosService from "../../services/PagosServices/PagoMPServices";

const PagoMercadoPago = async (req: Request, res: Response) => {
  try {
    const { cantidad, referencia } = req.body;

    // El email y otros datos vienen del token (gracias a verifyToken)
    const { email, name, telefono, direccion } = req.body;

    if (!cantidad || !referencia || !email) {
      return res.status(400).json({ error: "Faltan datos obligatorios (cantidad, referencia, email)" });
    }

    const resultadoPago = await PagosService.PagoMercadoPago({
      cantidad,
      referencia,
      email,
      nombre: name,
      telefono,
      direccion
    });

    return res.status(201).json({
      status: "Pago iniciado con MercadoPago",
      init_point: resultadoPago.init_point,
      data: resultadoPago,
    });
  } catch (error: any) {
    console.error("Error al procesar pago con MercadoPago:", error);
    return res.status(500).json({
      errorInfo: error.message || "Error interno del servidor",
    });
  }
};

export default PagoMercadoPago;
