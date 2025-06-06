import { Request, Response } from "express";
import AdministradorServices from "../../services/AdministradorServices";
import AdministradorDataDto from "../../Dto/AdministradorDto/AdministradorDataDto";

let AdministradorDataUpdate = async (req: Request, res: Response) => {
  try {
    const {
      nombre_admin,
      new_correo_admin,
      telefono_admin,
      correo_admin
    } = req.body;
      
    console.log("Datos recibidos:", {
      nombre_admin,
      new_correo_admin,
      telefono_admin,
      correo_admin
      });
    // Validar campos requeridos, correo_admin es clave para identificar registro
    if (!nombre_admin || !new_correo_admin || !telefono_admin || !correo_admin) {
      return res.status(400).json({ status: 'Todos los campos son obligatorios.' });
    }

    const updateAdministrador = await AdministradorServices.AdministradorDataUpdate(
      new AdministradorDataDto(nombre_admin, new_correo_admin, telefono_admin),
      correo_admin
    );

    return res.status(200).json({ status: 'update ok' });
  } catch (error: any) {
    if (error && error.code === 'ER_DUP_ENTRY') {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ error: error.message });
  }
};

export default AdministradorDataUpdate;
