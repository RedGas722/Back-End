import { Request, Response } from "express";
import PagosService from "../../services/PagosServices/PagoMPServices";

const ConsultarPagoMercadoPago = async (req: Request, res: Response) => {
  try {
    const { payment_id } = req.body;

    if (!payment_id) {
      return res.status(400).json({ error: "payment_id es requerido" });
    }

    const resultado = await PagosService.ConsultarPagoMercadoPago(payment_id);

    return res.status(200).json({
      status: "Consulta exitosa",
      data: resultado
    });
  } catch (error: any) {
    console.error("Error al consultar pago de MercadoPago:", error);
    return res.status(500).json({
      errorInfo: error.message || "Error interno del servidor",
    });
  }
};

export default ConsultarPagoMercadoPago;
