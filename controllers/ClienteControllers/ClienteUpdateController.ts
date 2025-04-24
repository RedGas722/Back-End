import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";
import Cliente from "../../Dto/ClienteDto/ClienteDto";


let ClienteUpdate = async (req: Request, res: Response) => {
  try {
    const {
      nombre_cliente,
      nuevo_correo_cliente,
      telefono_cliente,
      contraseña_cliente,
      correo_cliente,
    } = req.body;
    const updateCliente = await ClienteServices.ClienteUpdate(new Cliente(nombre_cliente, correo_cliente, telefono_cliente, contraseña_cliente), nuevo_correo_cliente as string);
    return res.status(201).json(
      { status: 'update ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default ClienteUpdate;