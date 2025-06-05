import { Request, Response } from "express";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraDelete = async (req: Request, res: Response) => {
    try {
        const id_categoria = Number(req.query.id_categoria);
        const nombre_producto = String(req.query.nombre_producto);

        const resultado = await SeEncuentraServices.SeEncuentraDelete(id_categoria, nombre_producto);

        return res.status(200).json({ status: 'delete ok' });
    } catch (error: any) {
        // Puedes mejorar el manejo de errores aquí
        return res.status(500).json({ error: error.message || "Error inesperado" });
    }
}

export default SeEncuentraDelete;