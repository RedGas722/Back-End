import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";

let TecnicoDelete = async (req: Request, res: Response) => {
  try {
    const {
        correo_tecnico,
    } = req.query;

    // Verificar si el correo existe antes de eliminar
    const tecnico = await TecnicoServices.getbyEmail(correo_tecnico as string);
    if (!tecnico || !Array.isArray(tecnico) || tecnico.length === 0) {
      return res.status(404).json({ status: 'El correo ingresado no existe' });
    }

    await TecnicoServices.TecnicoDelete(correo_tecnico as string);

    return res.status(201).json({ status: 'delete ok'});
  } catch (error: any) {
    console.error("Error en delete:", error);

    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default TecnicoDelete;
