import { Request, Response } from 'express';
import { crearPagoPSE } from '../../services/PagosServices/PagoPseService';

export const generarPagoPSE = async (req: Request, res: Response) => {
    try {
        const { bank, invoice, value, doc_type, doc_number, type_person } = req.body;
        const { name, email, telefono, direccion } = req.body;

        const pseData = {
            bank,
            invoice,
            description: "Compra RedGas",
            value,
            tax: '0',
            tax_base: '0',
            currency: 'COP',
            type_person,
            doc_type,
            doc_number,
            name,
            last_name: "N/A",
            email,
            country: 'CO',
            cell_phone: telefono,
            url_response: 'https://redgas-one.vercel.app/Shopping/Confirmacion',  // frontend a donde redirige al terminar el pago
            url_confirmation: 'https://redgas-one.vercel.app/ConfirmacionPagoPSE',  // webhook para la confirmación
            method_confirmation: 'POST',
            extra1: direccion
        };

        const transaction = await crearPagoPSE(pseData);
        res.json(transaction);
    } catch (error) {
        console.error("Error al generar transacción PSE:", error);
        res.status(500).json({ error: 'Error al generar el pago PSE' });
    }
};
