import { Request, Response } from "express";
import PagoPaypalServices from "../../services/PagosServices/PagoPaypalServices";

const WebhookPaypalController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const eventType = body.event_type;
    const resource = body.resource;

    // Usar el evento CHECKOUT.ORDER.APPROVED
    if (eventType === "CHECKOUT.ORDER.APPROVED") {
      const email = resource?.payer?.email_address;
      const referencia =
        resource?.purchase_units?.[0]?.custom_id || `REF-${Date.now()}`;
      const cantidad = resource?.purchase_units?.[0]?.amount?.value;

      if (!email || !cantidad) {
        throw new Error("Datos insuficientes en el webhook");
      }

      // Procesar y generar factura
      await PagoPaypalServices.ProcesarPagoYGenerarFacturaPayPal({
        referencia,
        email,
        cantidad,
      });

      return res.sendStatus(200);
    }

    // Ignorar otros eventos
    console.log("ℹ️ Evento ignorado:", eventType);
    return res.sendStatus(204);
  } catch (error) {
    console.error("❌ Error en webhook PayPal:", error);
    return res.sendStatus(500);
  }
};

export default WebhookPaypalController;
