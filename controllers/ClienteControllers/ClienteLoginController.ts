import { Request, Response } from "express";
import dotenv from "dotenv";
import ClienteServices from "../../services/ClienteServices";
import AuthCliente from "../../Dto/ClienteDto/ClienteAuthDto";
import generateToken from "../../Helpers/generateToken";
dotenv.config();


let ClienteLogin = async (req: Request, res: Response) => {
  try {
    const {
      correo_cliente,
      contraseña_cliente
    } = req.body;

    const login = await ClienteServices.ClienteLogin(new AuthCliente(correo_cliente, contraseña_cliente));
    
    if (login.logged) {
      const tipo_usuario = "cliente";
      return res.status(200).json({
        status: login.status,
        tipo_usuario,
        token: generateToken({
          id: login.id,
          name: login.name,
          email: login.email,
          telefono: login.telefono,
          direccion: login.direccion,
          tipo_usuario // también en el payload del token
        }, process.env.KEY_TOKEN, 5)
      });
    }

    return res.status(401).json({
      status: login.status
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Internal server error",
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

export default ClienteLogin;
