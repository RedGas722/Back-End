import { Request, Response } from "express";
import Pedido from "../../Dto/PedidoServicioDto/PedidoServicioDto";
import PedidoServicioServices from "../../services/PedidoServicioServices";

const PedidoServicioRegister = async (req: Request, res: Response) => {
  try {
    const {
      id_cliente,
      id_tecnico,
      estado_pedido
    } = req.body;

    const pedidoServicio = new Pedido(
      id_cliente,
      id_tecnico,
      estado_pedido
    );

    await PedidoServicioServices.PedidoServicioRegister(pedidoServicio);

    return res.status(201).json({ status: 'register ok' });

  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default PedidoServicioRegister;
