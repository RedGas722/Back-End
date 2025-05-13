import { Request, Response } from "express";
import ContratoServices from "../../services/ContratoServices";

let ContratoGet = async (req: Request, res: Response) => {
    try {
        const { id_empleado } = req.query;

        if (!id_empleado) {
            return res.status(400).json({ status: 'Missing required fields' });
        }

        const idEmpleado = parseInt(id_empleado as string);

        const contrato = await ContratoServices.ContratoGet(idEmpleado);

        if (!contrato) {
            return res.status(404).json({ status: 'Contrato not found' });
        }

        return res.status(200).json({ status: 'get ok', data: contrato });
    } catch (error: any) {
        console.error("Error en la obtención del contrato:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
};

export default ContratoGet;
