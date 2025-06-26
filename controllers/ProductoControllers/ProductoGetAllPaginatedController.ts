import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";
import CategoriaServices from "../../services/CategoriaServices";

const ProductoGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const categorias = await CategoriaServices.GetAllCategorias();
    try {
        const resultado = await ProductoServices.getAllPaginated(page, limit);
        return res.status(201).json(
            { status: 'get all ok', data:{resultado, categorias}}
        )
    } catch (error) {
        console.error('Error al obtener productos paginados:', error);
        res.status(500).json({ error: 'Error al obtener productos paginados' });
    }
};

export default ProductoGetAllPaginated;
