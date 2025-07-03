import mercadoPagoClient from "../../Helpers/ConfigMercadoPago";
import createPreference from "mercadopago/dist/clients/preference/create";
import getPayment from "mercadopago/dist/clients/payment/get"; // SDK v2

interface PagoMercadoPagoParams {
  cantidad: string;
  referencia: string;
  email: string;
  nombre?: string;
  telefono?: string;
  direccion?: string;
}

const PagoMercadoPago = async ({ cantidad, referencia, email }: PagoMercadoPagoParams) => {
  const preference = {
    items: [
      {
        id: referencia,
        title: `Producto: ${referencia}`,
        quantity: 1,
        currency_id: "COP",
        unit_price: parseFloat(cantidad),
      }
    ],
    payer: {
      email: email,
    },
    back_urls: {
      success: "https://redgas-one.vercel.app/Shopping/ConfirmacionMercadoPago",
      failure: "https://redgas-one.vercel.app/Shopping/Cancelado",
      pending: "https://redgas-one.vercel.app/Shopping/Pendiente"
    },
  };
  const result = await createPreference({
    config: mercadoPagoClient,
    body: preference,
  });

  return result;
};

const ConsultarPagoMercadoPago = async (payment_id: string) => {
  const result = await getPayment({ config: mercadoPagoClient, id: payment_id });

  if (!result || !result.id) {
    throw new Error("No se pudo obtener la información del pago");
  }

  return result; // directamente, sin .body
};

export default {
  PagoMercadoPago,
  ConsultarPagoMercadoPago
};
