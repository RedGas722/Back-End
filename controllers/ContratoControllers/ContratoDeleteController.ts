import { Request, Response } from "express";
import ContratoServices from "../../services/ContratoServices";


let ContratoDelete = async (req: Request, res: Response) => {
  try {
    const {
      id_empleado
    } = req.query;

    const idEmpleado = parseInt(id_empleado as string , 10);

    const deleteContrato = await ContratoServices.ContratoDelete(idEmpleado);
    return res.status(201).json(
        { status: 'delete ok'}
    )
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
          return res.status(500).json({ errorInfo: error.sqlMessage }
          )
        }
      }
}

export default ContratoDelete;