import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";

let TecnicoGet = async (req: Request, res: Response) => {
  try {
    const {
      correo_tecnico
    } = req.query;
    const getTecnico = await TecnicoServices.getbyEmail(correo_tecnico as string)
    return res.status(201).json(
      { status: 'Consult ok',
        data: getTecnico
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default TecnicoGet;