import { Request, Response } from "express";
import PedidoProductoServices from "../../services/PedidoProductoServices";

let PedidoProductoGetAll = async (req: Request, res: Response) => {
  try {
    const GetPedidoProductoAll = await PedidoProductoServices.PedidoProductoGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: GetPedidoProductoAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default PedidoProductoGetAll;