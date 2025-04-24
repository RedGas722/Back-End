import { Request, Response } from "express";
import ClienteServices from "../../services/ClienteServices";
import Cliente from "../../Dto/ClienteDto/ClienteDto";


let ClienteRegister = async (req: Request, res: Response) => {
  try {
    const {
      nombre_cliente,
      correo_cliente,
      telefono_cliente,
      contraseña_cliente
    } = req.body;
    const registerCliente = await ClienteServices.ClienteRegister(new Cliente(nombre_cliente, correo_cliente, telefono_cliente, contraseña_cliente))
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default ClienteRegister;