import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";


let ClienteDelete = async (req: Request, res: Response) => {
  try {
    const {
      correo_cliente
    } = req.query;
    const deleteCliente = await ClienteServices.ClienteDelete(correo_cliente as string)
    return res.status(201).json(
      { status: 'delete ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default ClienteDelete;