// services/PagosServices.ts
import getAccessToken from "../../Helpers/generateTokenPaypal";

interface PagoPaypalParams {
  cantidad: string;
  referencia: string;
  email: string;
}

const PagoPaypal = async ({ cantidad, referencia, email }: PagoPaypalParams) => {
  const token = await getAccessToken();
  console.log("ACCESS TOKEN:", token); /////// QUITAR!!!!!!!! solo prueba

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
        return_url: "http://localhost:3000/confirmacion",
        cancel_url: "http://localhost:3000/cancelado"        
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

export default { PagoPaypal };
