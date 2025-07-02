import ePayco from 'epayco-sdk-node';
import dotenv from 'dotenv';
dotenv.config();

// Inicializamos ePayco
const epayco = new ePayco({
    apiKey: process.env.EPAYCO_PUBLIC_KEY!,
    privateKey: process.env.EPAYCO_PRIVATE_KEY!,
    lang: 'ES',
    test: process.env.EPAYCO_TEST === 'true'
});

// Crear transacción PSE
export const crearPagoPSE = async (pseData: any) => {
    try {
        // Validación previa al request
        if (!pseData.cellphone || pseData.cellphone.length < 7) {
            throw new Error("Teléfono inválido o vacío, no se puede procesar el pago.");
        }

        const pseRequest = {
            bank: String(pseData.bank),
            invoice: String(pseData.invoice),
            description: String(pseData.description),
            value: String(pseData.value),
            tax: String(pseData.tax),
            tax_base: String(pseData.tax_base),
            currency: String(pseData.currency),
            type_person: String(pseData.type_person),
            doc_type: String(pseData.doc_type),
            doc_number: String(pseData.doc_number),
            name: String(pseData.name),
            last_name: String(pseData.last_name),
            email: String(pseData.email),
            country: String(pseData.country),
            cell_phone: String(pseData.cellphone ?? '').replace(/\D/g, '').slice(0,15),
            extra1: String(pseData.extra1),
            ip: "181.129.0.1"
        };

        const response = await epayco.bank.create(pseRequest);
        return response;
    } catch (error: any) {
        console.error("Error completo al crear pago PSE:", JSON.stringify(error, null, 2));
        throw error;
    }
};

export const consultarEstadoPago = async (refPayco: string) => {
  if (!refPayco) throw new Error("Referencia Payco no proporcionada");

  const url = `https://secure.epayco.co/validation/v1/reference/${refPayco}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error en la consulta: ${response.statusText}`);
  }

  const data = await response.json();

  if (!data || !data.data) {
    throw new Error("Datos no encontrados en la respuesta de ePayco");
  }

  return data.data;
};

// Procesar la confirmación (webhook de ePayco)
export const procesarConfirmacionPSE = async (confirmData: any) => {
    const {
        x_transaction_id,
        x_ref_payco,
        x_response,
        x_response_reason_text,
        x_amount,
        x_currency_code
    } = confirmData;

    console.log("✅ Confirmación recibida de ePayco:");
    console.log("ID transacción:", x_transaction_id);
    console.log("Referencia:", x_ref_payco);
    console.log("Estado:", x_response);
    console.log("Razón:", x_response_reason_text);
    console.log("Monto:", x_amount);
    console.log("Moneda:", x_currency_code);

    switch (parseInt(x_response)) {
        case 1:
            console.log("✔ Pago aprobado");
            break;
        case 2:
            console.log("❌ Pago rechazado");
            break;
        case 3:
            console.log("⌛ Pago pendiente");
            break;
        case 4:
            console.log("⚠ Pago fallido");
            break;
        default:
            console.log("Estado desconocido");
            break;
    }
};
