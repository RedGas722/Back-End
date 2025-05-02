import { Request, Response } from "express";
import FacturaServices from "../../services/FacturaServices";

let FacturaGetAll = async (req: Request, res: Response) => {
  try {
    const {
    
    } = req.query;
    
    const FacturaGetAll = await FacturaServices.FacturaGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: FacturaGetAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default FacturaGetAll;