import { Request, Response } from "express";
import PagoPaypalServices from "../../services/PagosServices/PagoPaypalServices";

const WebhookPaypalController = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        // Verificación básica de evento
        const eventType = body.event_type;
        const resource = body.resource;

        console.log("Evento recibido:", eventType);
        console.log("Resource:", JSON.stringify(resource, null, 2));

        if (eventType === "PAYMENT.CAPTURE.COMPLETED") {
            const referencia = resource?.invoice_id || resource?.custom_id || `REF-${Date.now()}`;
            const cantidad = resource?.amount?.value || "0";
            const email = resource?.payer?.email_address;

            if (!email || !cantidad) throw new Error("Datos insuficientes en el webhook");

            await PagoPaypalServices.ProcesarPagoYGenerarFacturaPayPal({
                referencia,
                email,
                cantidad
            });

            return res.sendStatus(200);
        }

        // Si no es un evento de interés
        return res.sendStatus(204);
    } catch (error) {
        console.error("Error en webhook PayPal:", error);
        return res.sendStatus(500);
    }
};

export default WebhookPaypalController;