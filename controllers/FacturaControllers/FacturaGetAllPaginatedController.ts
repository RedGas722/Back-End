import { Request, Response } from "express";
import FacturaServices from "../../services/FacturaServices";

const FacturaGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const data = await FacturaServices.getAllPaginated(page, limit);
        return res.status(201).json(
            { status: 'get all ok', data}
        )
    } catch (error) {
        console.error('Error al obtener facturas paginados:', error);
        res.status(500).json({ error: 'Error al obtener facturas paginados' });
    }
};

export default FacturaGetAllPaginated;
