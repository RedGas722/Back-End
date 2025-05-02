import { Request, Response } from "express";
import ContratoServices from "../../services/ContratoServices";

let ContratoGetAll = async (req: Request, res: Response) => {
  try {
    const {
    
    } = req.query;
    
    const ContratoGetAll = await ContratoServices.ContratoGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: ContratoGetAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ContratoGetAll;