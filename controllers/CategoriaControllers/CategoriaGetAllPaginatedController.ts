import { Request, Response } from "express";
import CategoriaServices from "../../services/CategoriaServices";

const CategoriaGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const data = await CategoriaServices.getAllPaginated(page, limit);
        return res.status(201).json(
            {status: 'get all ok', data}
        )
    } catch (error) {
        console.error('Error al obtener categorias paginados:', error);
        res.status(500).json({ error: 'Error al obtener categorias paginados' });
    }
};

export default CategoriaGetAllPaginated;
