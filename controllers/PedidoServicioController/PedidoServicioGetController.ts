import { Request, Response } from "express";
import PedidoServicioServices from "../../services/PedidoServicioServices";

let PedidoServicioGet = async (req: Request, res: Response) => {
    try {
        const { id_cliente } = req.query;

        if (!id_cliente) {
            return res.status(400).json({ status: 'Missing required fields' });
        }

        const idClienteNumber = Number(Array.isArray(id_cliente) ? id_cliente[0] : id_cliente);

        if (isNaN(idClienteNumber)) {
            return res.status(400).json({ status: 'Invalid id_cliente format' });
        }

        const pedido_servicio = await PedidoServicioServices.PedidoServicioGet(idClienteNumber);

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
