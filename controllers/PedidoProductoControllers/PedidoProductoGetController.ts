import { Request, Response } from "express";
import PedidoProductoServices from "../../services/PedidoProductoServices";

let PedidoProductoGet = async (req: Request, res: Response) => {
    try {
        const { id_factura } = req.query;

        if (!id_factura) {
            return res.status(400).json({ status: 'Missing required fields' });
        }

        const idFacturaNumber = Number(Array.isArray(id_factura) ? id_factura[0] : id_factura);

        if (isNaN(idFacturaNumber)) {
            return res.status(400).json({ status: 'Invalid id_factura format' });
        }

        const pedido_producto = await PedidoProductoServices.PedidoProductoGetById(idFacturaNumber);

        if (!pedido_producto) {
            return res.status(404).json({ status: 'Pedido_producto not found' });
        }

        return res.status(200).json({ status: 'get ok', data: pedido_producto });
    } catch (error: any) {
        console.error("Error en la obtención del pedido_producto:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
}
export default PedidoProductoGet;
