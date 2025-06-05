import { Request, Response } from "express";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraDelete = async (req: Request, res: Response) => {
    try {
        const id_categoria = Number(req.query.id_categoria);
        const id_producto = Number(req.query.id_producto);

        if (isNaN(id_categoria) || isNaN(id_producto)) {
        return res.status(400).json({ error: "id_categoria y id_producto deben ser números válidos" });
        }

        await SeEncuentraServices.SeEncuentraDelete(id_categoria, id_producto);

        return res.status(200).json({ status: 'delete ok' });
    } catch (error: any) {
        // Puedes mejorar el manejo de errores aquí
        return res.status(500).json({ error: error.message || "Error inesperado" });
    }
}

export default SeEncuentraDelete;