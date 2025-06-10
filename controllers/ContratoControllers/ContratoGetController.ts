import { Request, Response } from "express";
import ContratoServices from "../../services/ContratoServices";

let ContratoGet = async (req: Request, res: Response) => {
    try {
        const { id_empleado } = req.query;

        if (!id_empleado) {
            const response = { status: 'Missing required fields' };
            console.log("Respuesta enviada al front:", response);
            return res.status(400).json(response);
        }

        const idEmpleado = parseInt(id_empleado as string);

        const contrato = await ContratoServices.ContratoGet(idEmpleado);

        if (!contrato) {
            const response = { status: 'Contrato not found' };
            console.log("Respuesta enviada al front:", response);
            return res.status(404).json(response);
        }

        const response = { status: 'get ok', data: contrato };
        return res.status(200).json(response);
    } catch (error: any) {
        console.error("Error en la obtención del contrato:", error);
        const response = { status: 'Internal server error', error: error.message };
        return res.status(500).json(response);
    }
};

export default ContratoGet;
