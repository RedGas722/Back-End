import { Request, Response } from "express";
import PedidoProductoServices from "../../services/PedidoProductoServices";
import PedidoServicioServices from "../../services/PedidoServicioServices";

let PedidoServicioGet = async (req: Request, res: Response) => {
    try {
        const { id_factura } = req.query;

        if (!id_factura) {
            return res.status(400).json({ status: 'Missing required fields' });
        }

        const idFacturaNumber = Number(Array.isArray(id_factura) ? id_factura[0] : id_factura);

        if (isNaN(idFacturaNumber)) {
            return res.status(400).json({ status: 'Invalid id_factura format' });
        }

        const pedido_servicio = await PedidoServicioServices.PedidoServicioGet(idFacturaNumber);

        if (!pedido_servicio) {
            return res.status(404).json({ status: 'Pedido_servicio not found' });
        }

        return res.status(200).json({ status: 'get ok', data: pedido_servicio });
    } catch (error: any) {
        console.error("Error en la obtención del pedido_servicio:", error);
        return res.status(500).json({ status: 'Internal server error', error: error.message });
    }
}
export default PedidoServicioGet;
