import { Request, Response } from "express";
import dotenv from "dotenv";
import AdministradorServices from "../../services/AdministradorServices";
import generateToken from "../../Helpers/generateToken";
dotenv.config();


let AdminEmail = async (req: Request, res: Response) => {
  try {
    const {
      correo_admin
    } = req.body;

    const email = await AdministradorServices.AdminEmail(correo_admin as string);
    
    if (email.logged) {
      return res.status(200).json({
        status: email.status,
        token: generateToken({
          id: email.id, 
          name: email.name, 
          email: email.email, 
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


export default AdminEmail;
