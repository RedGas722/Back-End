import { Request, Response } from "express";
import Pedido from "../../Dto/PedidoDto/PedidoDto";
import PedidoServices from "../../services/PedidoServices";


let PedidoRegister = async (req: Request, res: Response) => {
  try {
    const {
        fecha_pedido,
        informacion_pedido,
        cantidad_productos,
        estado_pedido,
        id_cliente
    } = req.body;
    const registerPedido = await PedidoServices.PedidoRegister(new Pedido(fecha_pedido, informacion_pedido, cantidad_productos, estado_pedido, id_cliente))
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


export default PedidoRegister;