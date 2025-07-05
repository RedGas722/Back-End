import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

const AdministradorGetAllPaginated = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 15;

    try {
        const data = await AdministradorServices.getAllPaginated(page, limit);
        return res.status(200).json({ status: 'get all ok', data })
    } catch (error) {
        console.error('Error al obtener administradores paginados:', error);
        res.status(500).json({ error: 'Error al obtener administradores paginados' });
    }
};

export default AdministradorGetAllPaginated;
