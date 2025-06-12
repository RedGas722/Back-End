import { Request, Response } from 'express';
import { crearPagoPSE } from '../../services/PagosServices/PagoPseService';

export const generarPagoPSE = async (req: Request, res: Response) => {
    try {
        const { bank, invoice, value, doc_type, doc_number, type_person, name, email, telefono, direccion } = req.body;

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
            cellphone: telefono,  // <-- aquí el cambio importante
            url_response: 'https://redgas-one.vercel.app/Shopping/ConfirmacionPsE',
            url_confirmation: 'https://redgas.onrender.com/ConfirmacionPagoPSE',
            method_confirmation: 'POST',
            extra1: direccion
        };

        const transaction = await crearPagoPSE(pseData);
        res.json(transaction);
    } catch (error: any) {
        console.error("Error al generar transacción PSE:", JSON.stringify(error, null, 2));
        res.status(500).json({ error: error?.data?.description || 'Error al generar el pago PSE' });
    }
};
