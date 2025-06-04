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
      if (login.logged) {
        // Incluye el tipo de usuario en el token y la respuesta
        const tipo_usuario = "administrador";
        return res.status(200).json({
          status: 'login ok',
          tipo_usuario,
          token: generateToken(
            {
              id: login.id,
              name: login.name,
              email: login.email,
              telefono: login.telefono,
              tipo_usuario // también en el payload del token si lo deseas
            },
            process.env.KEY_TOKEN,
            5
          )
        });
      }

      return res.status(401).json({
        status: 'Invalid credentials',
      });
    } catch (error: any) {
      console.error("Error en el login:", error);

      return res.status(500).json({
        status: 'Internal server error',
        error: error.message,
      });
    }
}

export default AdministradorLoginController;
