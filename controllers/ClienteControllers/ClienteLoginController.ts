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
      return res.status(200).json({
        status: login.status,
        token: generateToken({
          id: login.id,
          name: login.name,
          email: login.email,
          telefono: login.telefono,
          direccion: login.direccion,
          tipo_usuario: login.tipo_usuario
        },
          process.env.KEY_TOKEN)
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
