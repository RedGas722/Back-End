import { Request, Response } from "express";
import PedidoServicioServices from "../../services/PedidoServicioServices";

const PedidoServicioGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const data = await PedidoServicioServices.getAllPaginated(page, limit);
        return res.status(201).json(
            { status: 'get all ok', data}
        )
    } catch (error) {
        console.error('Error al obtener pedido_servicio paginados:', error);
        res.status(500).json({ error: 'Error al obtener pedido_servicio paginados' });
    }
};

export default PedidoServicioGetAllPaginated;
