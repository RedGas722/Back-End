import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";

let TecnicoGetAll = async (req: Request, res: Response) => {
  try {
    const {
    
    } = req.query;
    
    const TecnicoGetAll = await TecnicoServices.getAllTecnicos();
    return res.status(201).json(
        { status: 'Consult ok', data: TecnicoGetAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default TecnicoGetAll;