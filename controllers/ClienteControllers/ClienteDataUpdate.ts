import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";
import DataCliente from "../../Dto/ClienteDto/DataClienteDto";


let ClienteDataUpdate = async (req: Request, res: Response) => {
  try {
    const {
      nombre_cliente,
      nuevo_correo_cliente,
      telefono_cliente,
      direccion_cliente,
      correo_cliente
    } = req.body;
    const updateDataCliente = await ClienteServices.ClienteDataUpdate(new DataCliente(nombre_cliente, nuevo_correo_cliente, telefono_cliente, direccion_cliente), correo_cliente as string);
    return res.status(201).json(
      { status: 'data update ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default ClienteDataUpdate;