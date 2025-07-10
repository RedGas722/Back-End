import { Request, Response } from "express";
import PagosService from "../../services/PagosServices/PagoMPServices";

const WebhookMPController = async (req: Request, res: Response) => {
  try {
    const { type, data } = req.body;

    if (type === "payment" && data?.id) {
      const payment_id = data.id;

      await PagosService.ProcesarPagoYGenerarFactura(payment_id);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("Error en webhook MercadoPago:", error);
    res.sendStatus(500);
  }
};

export default WebhookMPController;
