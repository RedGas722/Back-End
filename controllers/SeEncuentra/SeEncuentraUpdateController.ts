import { Request, Response } from "express";
import SeEncuentra from "../../Dto/SeEncuentraDto/SeEncuentra";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraUpdate = async (req: Request, res: Response) => {
  try {
    const { nombre_producto, id_categoria } = req.body;

    if (!nombre_producto || !id_categoria) {
      return res.status(400).json({ error: "Faltan parámetros obligatorios" });
    }

    const resultado = await SeEncuentraServices.SeEncuentraUpdate(nombre_producto, id_categoria);

    if (!resultado) {
      return res.status(404).json({ error: "Producto o categoría no encontrados" });
    }

    return res.status(200).json({ status: "update ok" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ errorInfo: error.message || error.sqlMessage });
  }
};

export default SeEncuentraUpdate;
