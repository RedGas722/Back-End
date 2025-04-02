import { Request, Response } from "express";
import Empleado from "../../Dto/EmpleadoDto/EmpleadoDto";
import EmpleadoServices from "../../services/EmpleadoServices";

let register = async (req: Request, res: Response) => {
  try {
    const {
        nombre_empleado,
        correo_empleado,
        telefono_empleado,
        direccion_empleado,
        contraseña_empleado,
    } = req.body;

    // Verifica que los campos requeridos no estén vacíos
    if (!nombre_empleado || !correo_empleado || !contraseña_empleado) {
      return res.status(400).json({ status: 'Missing required fields' });
    }

    const registerEmpleado = await EmpleadoServices.register(
      new Empleado(
        nombre_empleado,
        correo_empleado,
        telefono_empleado,
        direccion_empleado,
        contraseña_empleado
      )
    );

    return res.status(201).json({ status: 'register ok', data: registerEmpleado });
  } catch (error: any) {
    console.error("Error en el registro:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default register;

