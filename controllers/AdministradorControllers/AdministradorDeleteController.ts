import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";

let AdministradorDelete = async (req: Request, res: Response) => {
  try {
    const {
      correo_admin
    } = req.query;

    if(!correo_admin)
      {
        return res.status(400).json({ status: 'Missing required fields' });
      }
    const deleteAdministrador = await AdministradorServices.AdministradorDelete(correo_admin as string);
    return res.status(201).json(
      { status: 'delete ok' }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default AdministradorDelete;