import { Request, Response } from "express";
import PagosService from "../../services/PagosServices/PagoPaypalServices";

const PagoPaypal = async (req: Request, res: Response) => {
  try {
    const { 
      cantidad,
      referencia,
      email 
    } = req.body;

    if (!cantidad || !referencia || !email) {
      return res.status(400).json({ error: "Faltan datos obligatorios (cantidad, referencia, email)" });
    }

    const resultadoPago = await PagosService.PagoPaypal({
      cantidad,
      referencia,
      email,
    });

    return res.status(201).json({
      status: "Pago iniciado con PayPal",
      data: resultadoPago,
    });
  } catch (error: any) {
    console.error("Error al procesar pago con PayPal:", error);
    return res.status(500).json({
      errorInfo: error.message || "Error interno del servidor",
    });
  }
};

export default PagoPaypal;
