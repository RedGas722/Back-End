import { Request, Response } from "express";
import CategoriaServices from "../../services/CategoriaServices";

let CategoriaGet = async (req: Request, res: Response) => {
    try {
        const { nombre_categoria } = req.query;
    
        // Verifica que los campos requeridos no estén vacíos
        if (!nombre_categoria) {
        return res.status(400).json({ status: 'Missing required fields' });
        }
    
        const categoria = await CategoriaServices.CategoriaGet(nombre_categoria as string);
    
        if (!categoria) {
        return res.status(404).json({ status: 'Categoria not found' });
        }
    
        return res.status(200).json({ status: 'get ok', data: categoria });
    } catch (error: any) {
        console.error("Error en la obtención de la categoria:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
    }
    export default CategoriaGet;
