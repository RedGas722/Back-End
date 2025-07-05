import { Request, Response } from "express";
import ServicioServices from "../../services/ServicioServices";

const ServicioGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 15;

    try {
        const data = await ServicioServices.getAllPaginated(page, limit);
        return res.status(201).json(
            { status: 'get all ok', data}
        )
    } catch (error) {
        console.error('Error al obtener servicio paginados:', error);
        res.status(500).json({ error: 'Error al obtener servicio paginados' });
    }
};

export default ServicioGetAllPaginated;
