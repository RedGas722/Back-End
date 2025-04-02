import AdministradorServices from "../../services/AdministradorServices";
import AuthAdministrador from "../../Dto/AdministradorDto/AdministradorAuthDto";
import generateToken from "../../Helpers/generateToken";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

let AdministradorLoginController = async (req: Request, res: Response) => {
   try{
      const {
         correo_admin,
         contraseña_admin
      } = req.body;
   
   const login = await AdministradorServices.AdministradorLogin(new AuthAdministrador(correo_admin, contraseña_admin));
   // Verifica si el login fue exitoso
   if (login.logged) {
      return res.status(200).json({
        status: 'login ok',
        data: login,
      });
    }

    // Si las credenciales son incorrectas
    return res.status(401).json({
      status: 'Invalid credentials',
    });
  } catch (error: any) {
    console.error("Error en el login:", error);

    // Responde con un error genérico si ocurre algo inesperado
    return res.status(500).json({
      status: 'Internal server error',
      error: error.message,
    });
  }
}

export default AdministradorLoginController;
