import { Request, Response } from "express";
import SeEncuentraServices from "../../services/SeEncuentraServices";

let SeEncuentraUpdate = async (req: Request, res: Response) => {
  try {
    const { nombre_producto, id_categoria } = req.body;

    if (!nombre_producto || !id_categoria) {
      return res.status(400).json({ error: "Faltan parámetros obligatorios" });
    }

    const resultado = await SeEncuentraServices.SeEncuentraUpdate(nombre_producto, id_categoria);

    if (resultado === false) {
      // No hubo actualización porque los datos son iguales o no existe la relación
      return res.status(200).json({ message: "No se actualizó porque los datos son iguales o la relación ya existe." });
    }

    return res.status(200).json({ status: "update ok" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ errorInfo: error.message || error.sqlMessage });
  }
};

export default SeEncuentraUpdate;
