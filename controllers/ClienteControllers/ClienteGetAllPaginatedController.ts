import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";

const ClienteGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const data = await ClienteServices.getAllPaginated(page, limit);
        return res.status(201).json(
            {status: 'get all ok', data}
        )
    } catch (error) {
        console.error('Error al obtener clientes paginados:', error);
        res.status(500).json({ error: 'Error al obtener clientes paginados' });
    }
};

export default ClienteGetAllPaginated;
