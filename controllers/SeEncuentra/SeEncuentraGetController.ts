import { Request, Response } from "express";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraGet = async (req: Request, res: Response) => {
  try {
    const id_categoria = Number(req.query.id_categoria);
    const id_producto = Number(req.query.id_producto);

    if (isNaN(id_categoria) || isNaN(id_producto)) {
        return res.status(400).json({ error: "id_categoria y id_producto deben ser números válidos" });
    }

    await SeEncuentraServices.SeEncuentraGet(id_categoria, id_producto);
    return res.status(201).json(
        { status: 'get ok'}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default SeEncuentraGet;