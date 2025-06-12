import ePayco from 'epayco-sdk-node';
import dotenv from 'dotenv';
dotenv.config();

// Inicializamos ePayco para el resto de operaciones
const epayco = new ePayco({
    apiKey: process.env.EPAYCO_PUBLIC_KEY!,
    privateKey: process.env.EPAYCO_PRIVATE_KEY!,
    lang: 'ES',
    test: process.env.EPAYCO_TEST === 'true'
});

// Obtener listado de bancos PSE desde API REST
export const obtenerBancosPSE = async () => {
    try {
        const url = `https://api.secure.payco.co/restpagos/pse/banks?public_key=${process.env.EPAYCO_PUBLIC_KEY}`;
        console.log("Consultando bancos PSE en:", url);

        const response = await fetch(url);

        if (!response.ok) {
            // Si ePayco responde con error HTTP (400, 403, 500, etc)
            console.error(`Error HTTP desde ePayco: ${response.status} ${response.statusText}`);
            const errorText = await response.text();
            console.error("Respuesta de error:", errorText);
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const text = await response.text();
        console.log("Respuesta cruda de ePayco:", text);

        let bancos;
        try {
            bancos = JSON.parse(text);
        } catch (jsonError) {
            console.error("Error al parsear JSON:", jsonError);
            throw new Error("La respuesta de ePayco no es JSON válido.");
        }

        return bancos;
    } catch (error) {
        console.error("Error general al obtener bancos PSE:", error);
        throw error;
    }
};

// Crear transacción PSE usando SDK
export const crearPagoPSE = async (pseData: any) => {
    try {
        const response = await epayco.bank.create(pseData);
        return response;
    } catch (error) {
        console.error("Error al crear pago PSE:", error);
        throw error;
    }
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
