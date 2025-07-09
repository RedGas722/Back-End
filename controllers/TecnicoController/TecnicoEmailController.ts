import { Request, Response } from "express";
import dotenv from "dotenv";
import generateToken from "../../Helpers/generateToken";
import TecnicoServices from "../../services/TecnicoServices";
dotenv.config();


let TecnicoEmail = async (req: Request, res: Response) => {
  try {
    const {
      correo_tecnico
    } = req.body;

    const email = await TecnicoServices.TecnicoEmail(correo_tecnico as string);
    
    if (email.logged) {
      return res.status(200).json({
        status: email.status,
        token: generateToken({
          id: email.id, 
          name: email.name, 
          email: email.email, 
          tipo_usuario: email.tipo_usuario
        }, process.env.KEY_TOKEN, 10)
      });
    }

    return res.status(401).json({
      status: email.status
    });

  } catch (error) {
    console.log(error);
  }
}


export default TecnicoEmail;
