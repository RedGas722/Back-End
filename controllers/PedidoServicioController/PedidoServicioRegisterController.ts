import { Request, Response } from "express";
import PedidoServicio from "../../Dto/PedidoServicioDto/PedidoServicioDto";
import PedidoServicioServices from "../../services/PedidoServicioServices";


let PedidoServicioRegister = async (req: Request, res: Response) => {
  try {
    const {
      id_servicio,
      id_factura,
      estado_pedido
    } = req.body;
    const registerPedidoServicio = await PedidoServicioServices.PedidoServicioRegister(new PedidoServicio(id_servicio, id_factura, estado_pedido))
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default PedidoServicioRegister;