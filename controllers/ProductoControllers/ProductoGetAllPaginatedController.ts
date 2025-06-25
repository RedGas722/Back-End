import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

const ProductoGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const resultado = await ProductoServices.getAllPaginated(page, limit);
        res.json(resultado);
    } catch (error) {
        console.error('Error al obtener productos paginados:', error);
        res.status(500).json({ error: 'Error al obtener productos paginados' });
    }
};

export default ProductoGetAllPaginated;
