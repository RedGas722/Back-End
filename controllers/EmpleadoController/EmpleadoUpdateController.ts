import { Request, Response } from "express";
import Empleado from "../../Dto/EmpleadoDto/EmpleadoDto";
import EmpleadoServices from "../../services/EmpleadoServices";

let EmpleadoUpdate = async (req: Request, res: Response) => {
  try {
     const {
        correo_empleado,
        nombre_empleado,
        nuevo_correo_empleado,
        telefono_empleado,
        direccion_empleado,
        contraseña_empleado,
    } = req.body;

    // Verifica que los campos requeridos no estén vacíos
    if (!nombre_empleado || !correo_empleado || !contraseña_empleado) {
      return res.status(400).json({ status: 'Missing required fields' });
    }

    const updateEmpleado = await EmpleadoServices.EmpleadoUpdate(
      new Empleado(
        nombre_empleado,
        correo_empleado,
        telefono_empleado,
        direccion_empleado,
        contraseña_empleado
      ),
      nuevo_correo_empleado as string
    );
    return res.status(201).json(
      { status: 'register ok', data: updateEmpleado }
    );

  } catch (error: any) {
    console.error("Error en el registro:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default EmpleadoUpdate;


