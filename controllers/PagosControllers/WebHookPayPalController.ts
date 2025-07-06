import { Request, Response } from "express";
import PagoPaypalServices from "../../services/PagosServices/PagoPaypalServices";

const WebhookPaypalController = async (req: Request, res: Response) => {
    console.log("🔔 Webhook recibido en PayPal");
    console.log("Raw body:", JSON.stringify(req.body, null, 2));
  try {
    const body = req.body;
    const eventType = body.event_type;
    const resource = body.resource;

    console.log("Evento recibido:", eventType);
    if (eventType !== "PAYMENT.CAPTURE.COMPLETED") {
      return res.sendStatus(204); // Evento no manejado
    }

    const referencia = resource?.invoice_id || resource?.custom_id || `REF-${Date.now()}`;
    const cantidad = resource?.amount?.value || "0";
    const email = resource?.payment_source?.paypal?.email_address;

    if (!email || !cantidad) throw new Error("Datos insuficientes en el webhook");

    await PagoPaypalServices.ProcesarPagoYGenerarFacturaPayPal({
      referencia,
      email,
      cantidad
    });

    return res.sendStatus(200);
  } catch (error) {
    console.error("Error en webhook PayPal:", error);
    return res.sendStatus(500);
  }
};

export default WebhookPaypalController;
