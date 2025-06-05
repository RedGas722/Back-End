import { Request, Response } from "express";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraGet = async (req: Request, res: Response) => {
  try {
    const id_categoria = Number(req.query.id_categoria);
    const nombre_producto = String(req.query.nombre_producto);

    const resultado = await SeEncuentraServices.SeEncuentraGet(id_categoria, nombre_producto);
    return res.status(201).json(
        { status: 'get ok', data: resultado }
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default SeEncuentraGet;