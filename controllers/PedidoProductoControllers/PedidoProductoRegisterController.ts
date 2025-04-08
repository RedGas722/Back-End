import { Request, Response } from "express";
import PedidoProducto from "../../Dto/PedidoProductoDto/PedidoProductoDto";
import PedidoProductoServices from "../../services/PedidoProductoServices";


let PedidoProductoRegister = async (req: Request, res: Response) => {
  try {
    const {
      id_producto,
      id_factura,
      cantidad_producto,
      informacion_pedido,
      estado_pedido
    } = req.body;
    const registerPedidoProducto = await PedidoProductoServices.PedidoProductoRegister(new PedidoProducto(id_producto, id_factura, cantidad_producto, informacion_pedido,  estado_pedido))
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


export default PedidoProductoRegister;