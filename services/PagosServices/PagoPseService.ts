import ePayco from 'epayco-sdk-node';
import dotenv from 'dotenv';
dotenv.config();

const epayco = new ePayco({
    apiKey: process.env.EPAYCO_PUBLIC_KEY!,
    privateKey: process.env.EPAYCO_PRIVATE_KEY!,
    lang: 'ES',
    test: true
});

// Servicio para crear el pago PSE
export const crearPagoPSE = async (pseData: any) => {
    return await epayco.bank.create(pseData);
};

// Servicio para procesar la confirmación del pago PSE (webhook)
export const procesarConfirmacionPSE = async (confirmData: any) => {
    const {
        x_transaction_id,
        x_ref_payco,
        x_response,
        x_response_reason_text,
        x_amount,
        x_currency_code
    } = confirmData;

    console.log("Confirmación recibida de ePayco:");
    console.log("ID transacción:", x_transaction_id);
    console.log("Referencia:", x_ref_payco);
    console.log("Estado:", x_response);
    console.log("Razón:", x_response_reason_text);
    console.log("Monto:", x_amount);
    console.log("Moneda:", x_currency_code);

    // Aquí iría la lógica para actualizar el estado del pago en la base de datos.
    // Ejemplo básico:
    switch (parseInt(x_response)) {
        case 1:
            console.log("Pago aprobado");
            // actualizar pago como aprobado en la DB
            break;
        case 2:
            console.log("Pago rechazado");
            // actualizar pago como rechazado en la DB
            break;
        case 3:
            console.log("Pago pendiente");
            // actualizar pago como pendiente en la DB
            break;
        case 4:
            console.log("Pago fallido");
            // actualizar pago como fallido en la DB
            break;
        default:
            console.log("Estado desconocido");
            break;
    }
}
