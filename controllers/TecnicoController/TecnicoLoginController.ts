import { Request, Response } from "express";
import AuthTecnico from "../../Dto/TecnicoDto/authTecnicoDto";
import TecnicoServices from "../../services/TecnicoServices";

let login = async (req: Request, res: Response) => {
  try {
    const { correo, contraseña_tecnico } = req.body;

    // Create an instance of AuthTecnico with the request data
    const loginTecnico = await TecnicoServices.login(new AuthTecnico(correo, contraseña_tecnico));

    // Check if the login was successful
    if (loginTecnico.logged) {
      return res.status(200).json({
        status: 'login ok',
        data: loginTecnico,
      });
    }

    // If the credentials are incorrect
    return res.status(401).json({
      status: 'Invalid credentials',
    });
  } catch (error: any) {
    console.error("Error in login:", error);

    // Return a generic error message if something unexpected happens
    return res.status(500).json({
      status: 'Internal server error',
      error: error.message,
    });
  }
};

export default login;
