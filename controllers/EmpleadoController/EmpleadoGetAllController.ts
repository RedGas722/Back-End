import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";
let EmpleadoGetAll = async (req: Request, res: Response) => {
  try {
    const {
    
    } = req.query;
    
    const EmpleadoGetAll = await EmpleadoServices.EmpleadoGetAll();
    return res.status(201).json(
        { status: 'Consult ok', data: EmpleadoGetAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default EmpleadoGetAll;