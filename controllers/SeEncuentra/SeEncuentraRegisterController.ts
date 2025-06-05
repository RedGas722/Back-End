import { Request, Response } from "express";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraRegister = async (req: Request, res: Response) => {
  try {
    const {
      id_categoria,
      nombre_producto
    } = req.body;

    const registerSeEncuentra = await SeEncuentraServices.SeEncuentraRegister(id_categoria, nombre_producto);
    return res.status(201).json(
        { status: 'register ok'}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default SeEncuentraRegister;