import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";
import generateToken from '../../Helpers/generateToken';
import dotenv from "dotenv";
import AuthEmpleado from "../../Dto/EmpleadoDto/authEmpleadoDto";

dotenv.config();


let auth = async (req: Request, res: Response) => {
  try {
    const { correo_empleado, contraseña_empleado} = req.body;
    const login = await EmpleadoServices.login(new AuthEmpleado(correo_empleado, contraseña_empleado));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id}, process.env.JWT_SECRET, 5)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }
}


export default auth;