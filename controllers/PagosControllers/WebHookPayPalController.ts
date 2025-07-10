import { Request, Response } from "express";
import PagoPaypalServices from "../../services/PagosServices/PagoPaypalServices";

const WebhookPaypalController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const eventType = body.event_type;
    const resource = body.resource;

    if (eventType === "CHECKOUT.ORDER.APPROVED") {
      const email = resource?.payer?.email_address;
      const purchaseUnit = resource?.purchase_units?.[0];
      const cantidad = purchaseUnit?.amount?.value;
      const customId = purchaseUnit?.custom_id;

      if (!email || !cantidad || !customId) {
        throw new Error("Faltan datos en el webhook de PayPal");
      }

      // Parsear id_cliente e id_producto desde custom_id
      const [id_cliente_str, id_producto_str] = customId.split("-");
      const id_cliente = parseInt(id_cliente_str);
      const id_producto = id_producto_str === "null" ? null : parseInt(id_producto_str);

      if (!id_cliente || isNaN(id_cliente)) {
        throw new Error("id_cliente inválido en custom_id");
      }

      const referencia = resource?.id || `PAYPAL-${Date.now()}`;

      await PagoPaypalServices.ProcesarPagoYGenerarFacturaPayPal({
        referencia,
        email,
        cantidad,
        id_cliente,
        id_producto,
      });

      return res.sendStatus(200);
    }

    // Otros eventos se ignoran
    console.log("ℹ️ Evento PayPal ignorado:", eventType);
    return res.sendStatus(204);
  } catch (error) {
    console.error("❌ Error en webhook PayPal:", error);
    return res.sendStatus(500);
  }
};

export default WebhookPaypalController;
