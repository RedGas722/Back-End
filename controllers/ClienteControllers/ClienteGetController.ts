import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";


let ClienteGet = async (req: Request, res: Response) => {
  try {
    const {correo_cliente} = req.query;

    if (typeof correo_cliente !== 'string') {
      return res.status(400).json({ error: 'El parámetro correo_cliente debe ser una cadena de texto.' });
    }

    const getCliente = await ClienteServices.ClienteGet(correo_cliente);
    
    return res.status(201).json(
      getCliente
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default ClienteGet;