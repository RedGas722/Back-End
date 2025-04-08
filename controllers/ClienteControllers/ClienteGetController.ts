import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";

let ClienteGet = async (req: Request, res: Response) => {
  try {
    const {
      correo_cliente
    } = req.query;
    const getCliente = await ClienteServices.ClienteGet(correo_cliente as string)
    return res.status(201).json(
      { status: 'Consult ok',
        data: getCliente
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default ClienteGet;