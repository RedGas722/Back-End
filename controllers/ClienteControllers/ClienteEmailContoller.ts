import { Request, Response } from "express";
import dotenv from "dotenv";
import ClienteServices from "../../services/ClienteServices";
import generateToken from "../../Helpers/generateToken";
dotenv.config();


let ClienteEmail = async (req: Request, res: Response) => {
  try {
    const {
      correo_cliente
    } = req.body;

    const email = await ClienteServices.ClienteEmail(correo_cliente as string);
    
    if (email.logged) {
      return res.status(200).json({
        status: email.status,
        token: generateToken({id: email.id, name: email.name, email: email.email, telefono: email.telefono}, process.env.KEY_TOKEN, 10)
      });
    }

    return res.status(401).json({
      status: email.status
    });

  } catch (error) {
    console.log(error);
  }
}


export default ClienteEmail;
