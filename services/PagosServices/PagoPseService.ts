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

// Listado local de bancos PSE (actualizado a junio 2025)
export const obtenerBancosPSE = async () => {
    try {
        const bancos = [
            { bankCode: "1022", bankName: "BANCOLOMBIA" },
            { bankCode: "1052", bankName: "BANCO DE BOGOTÁ" },
            { bankCode: "1040", bankName: "DAVIVIENDA" },
            { bankCode: "1001", bankName: "BANCO AGRARIO" },
            { bankCode: "1063", bankName: "BANCO DE OCCIDENTE" },
            { bankCode: "1013", bankName: "BANCO AV VILLAS" },
            { bankCode: "1051", bankName: "BANCO POPULAR" },
            { bankCode: "1071", bankName: "BANCO ITAU" },
            { bankCode: "1062", bankName: "BANCO BBVA" },
            { bankCode: "1066", bankName: "SCOTIABANK COLPATRIA" }
        ];
        return bancos;
    } catch (error) {
        console.error("Error al obtener bancos PSE:", error);
        throw error;
    }
};

// Crear transacción PSE
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
