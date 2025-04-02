import { Request, Response } from "express";
import dotenv from "dotenv";
import ClienteServices from "../../services/ClienteServices";
import AuthCliente from "../../Dto/ClienteDto/ClienteAuthDto";
import generateToken from "../../Helpers/generateToken";
dotenv.config();


let ClienteLoginController = async (req: Request, res: Response) => {
  try {
    const { correo_cliente, contraseña_cliente } = req.body;
    const login = await ClienteServices.ClienteLogin(new AuthCliente(correo_cliente, contraseña_cliente));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id}, process.env.KEY_TOKEN, 5)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }
}


export default ClienteLoginController;