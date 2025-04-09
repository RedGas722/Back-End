import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";
import Administrador from "../../Dto/AdministradorDto/AdministradorDto";

let AdministradorUpdate = async (req: Request, res: Response) => {
   try{
      const {
         nombre_admin,
         correo_admin,
         telefono_admin,
         contraseña_admin
       } = req.body;

      if(!nombre_admin || !correo_admin || !telefono_admin || !contraseña_admin)
      {
        return res.status(400).json({ status: 'Missing required fields' });
      }

      const UpdateAdministrador = await AdministradorServices.AdministradorUpdate( new Administrador(nombre_admin, correo_admin, telefono_admin, contraseña_admin))
      {
         return res.status(200).json(
            { status: 'resgister ok' }
         );
      }
   } catch (error: any){
      if (error && error.code == 'ER_DUP_ENTRY') {
         return res.status(500).json({ errorInfo: error.sqlMessage }
         );
      }
   }
}

export default AdministradorUpdate;