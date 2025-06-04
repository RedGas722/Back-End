import { Request, Response } from "express";
import AuthTecnico from "../../Dto/TecnicoDto/TecnicoAuthDto";
import TecnicoServices from "../../services/TecnicoServices";
import generateToken from "../../Helpers/generateToken";

let TecnicoLogin = async (req: Request, res: Response) => {
  try {
    const { correo_tecnico, contraseña_tecnico } = req.body;
    
    const loginTecnico = await TecnicoServices.login(new AuthTecnico(correo_tecnico, contraseña_tecnico));

    if (loginTecnico.logged) {
      const tipo_usuario = "tecnico";
      return res.status(200).json({
        status: 'login ok',
        tipo_usuario,
        token: generateToken({
          id: loginTecnico.id,
          name: loginTecnico.name,
          email: loginTecnico.email,
          telefono: loginTecnico.telefono,
          tipo_usuario // también en el payload del token
        }, process.env.KEY_TOKEN, 5)
      });
    }
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

export default TecnicoLogin;
