import { Request, Response } from "express";
import PagoPaypalServices from "../../services/PagosServices/PagoPaypalServices";

const WebhookPaypalController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const eventType = body.event_type;
    const resource = body.resource;

    console.log("🔔 Evento recibido:", eventType);

    const status = resource?.status;
    const cantidad = resource?.amount?.value;
    const email =
      resource?.payer?.email_address ||
      resource?.payment_source?.paypal?.email_address;
    const referencia = resource?.invoice_id || resource?.custom_id || `REF-${Date.now()}`;

    if (!email || !cantidad) {
      throw new Error("❌ Datos insuficientes en el webhook");
    }

    if (eventType === "PAYMENT.CAPTURE.PENDING") {
      console.log("⏳ Pago pendiente recibido. Generando factura de inmediato...");

      await PagoPaypalServices.ProcesarPagoYGenerarFacturaPayPal({
        referencia,
        email,
        cantidad,
      });

      return res.sendStatus(200);
    }

    console.log("ℹ️ Evento ignorado o no procesable:", eventType, status);
    return res.sendStatus(204);
  } catch (error) {
    console.error("❌ Error en webhook PayPal:", error);
    return res.sendStatus(500);
  }
};

export default WebhookPaypalController;
