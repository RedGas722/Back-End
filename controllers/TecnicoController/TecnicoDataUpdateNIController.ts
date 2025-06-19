import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";
import TecnicoNI from "../../Dto/TecnicoDto/TecnicoNIDto";

let TecnicoDataUpdateNI = async (req: Request, res: Response) => {
  try {
    const {
      cc,
      nombre_tecnico,
      nuevo_correo_tecnico,
      telefono_tecnico,
      correo_tecnico
    } = req.body;

    const updateTecnico = await TecnicoServices.TecnicoDataUpdateNI(
      new TecnicoNI(
        cc,
        nombre_tecnico,
        nuevo_correo_tecnico,
        telefono_tecnico
      ),
      correo_tecnico as string
    );

    return res.status(201).json({ status: 'update ok with no image'});
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
  }
};

export default TecnicoDataUpdateNI;
