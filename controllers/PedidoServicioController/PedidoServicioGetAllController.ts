import { Request, Response } from "express";
import PedidoServicioServices from "../../services/PedidoServicioServices";

let PedidoServicioGetAll = async (req: Request, res: Response) => {
  try {
    const GetPedidoServicioAll = await PedidoServicioServices.PedidoServicioGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: GetPedidoServicioAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default PedidoServicioGetAll;