import getAccessToken from "../../Helpers/generateTokenPaypal";

interface PagoPaypalParams {
  cantidad: string;
  referencia: string;
  email: string;
}

const PagoPaypal = async ({ cantidad, referencia, email }: PagoPaypalParams) => {
  const token = await getAccessToken();

  const body = {
    intent: "CAPTURE",
    purchase_units: [{
      reference_id: referencia,
      amount: {
        currency_code: "USD",
        value: cantidad
      }
    }],
    payer: {
      email_address: email
    },
    application_context: {
      return_url: "https://redgas-one.vercel.app/Shopping/Confirmacion",
      cancel_url: "https://redgas-one.vercel.app/Shopping/Cancelado"
    }
  };

  const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear la orden en PayPal");
  }

  return data;
};

const CapturarPago = async (orderID: string) => {
  const token = await getAccessToken();

  const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error al capturar pago:", data);
    throw new Error(data.message || "No se pudo capturar el pago");
  }

  return data;
};

export default {
  PagoPaypal,
  CapturarPago
};
