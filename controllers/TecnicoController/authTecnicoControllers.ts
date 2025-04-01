import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";
import generateToken from '../../Helpers/generateToken';
import dotenv from "dotenv";
import AuthTecnico from "../../Dto/TecnicoDto/authTecnicoDto";

dotenv.config();

let auth = async (req: Request, res: Response) => {
  try {
    const { correo_tecnico, contraseña_tecnico } = req.body;
    const login = await TecnicoServices.login(new AuthTecnico(correo_tecnico, contraseña_tecnico));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({ id: login.id }, process.env.JWT_SECRET, 5)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }
};

export default auth;
