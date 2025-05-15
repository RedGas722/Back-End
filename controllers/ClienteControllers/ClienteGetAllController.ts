import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";

let ClienteGetAll = async (req: Request, res: Response) => {
  try {
    const GetClienteAll = await ClienteServices.GetAllClientes();
    return res.status(201).json(
        { status: 'Consult ok', data: GetClienteAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default ClienteGetAll;