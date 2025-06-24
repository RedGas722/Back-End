import { Request, Response } from "express";
import Pedido from "../../Dto/PedidoServicioDto/PedidoServicioDto";
import PedidoServicioServices from "../../services/PedidoServicioServices";

const PedidoServicioRegister = async (req: Request, res: Response) => {
  try {
    const {
      id_servicio,
      id_cliente,
      id_tecnico
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo de imagen.' });
    }

    const imagenBuffer = req.file.buffer;

    const pedidoServicio = new Pedido(
      id_servicio,
      id_cliente,
      id_tecnico,
      imagenBuffer
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
