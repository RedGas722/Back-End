import { Request, Response } from "express";
import dotenv from "dotenv";
import generateToken from "../../Helpers/generateToken";
import EmpleadoServices from "../../services/EmpleadoServices";
dotenv.config();


let EmpleadoEmail = async (req: Request, res: Response) => {
  try {
    const {
      correo_empleado
    } = req.body;

    const email = await EmpleadoServices.EmpleadoEmail(correo_empleado as string);
    
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


export default EmpleadoEmail;
