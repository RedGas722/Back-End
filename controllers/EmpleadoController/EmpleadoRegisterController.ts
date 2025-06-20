import { Request, Response } from "express";
import Empleado from "../../Dto/EmpleadoDto/EmpleadoDto";
import EmpleadoServices from "../../services/EmpleadoServices";

let EmpleadoRegister = async (req: Request, res: Response) => {
  try {
    const {
        cc_empleado,
        nombre_empleado,
        correo_empleado,
        telefono_empleado,
        direccion_empleado,
        contraseña_empleado,
    } = req.body;

    const registerEmpleado = await EmpleadoServices.EmpleadoRegister(
      new Empleado(
        cc_empleado,
        nombre_empleado,
        correo_empleado,
        telefono_empleado,
        direccion_empleado,
        contraseña_empleado
      )
    );

    return res.status(201).json({ status: 'register ok'});
  } catch (error: any) {
    console.error("Error en el registro:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default EmpleadoRegister;

