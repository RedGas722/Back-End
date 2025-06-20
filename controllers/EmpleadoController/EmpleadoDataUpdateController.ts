import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";
import DataEmpleado from "../../Dto/EmpleadoDto/DataEmpleadoDto";

let EmpleadoDataUpdate = async (req: Request, res: Response) => {
  try {
     const {
        cc_empleado,
        nombre_empleado,
        nuevo_correo_empleado,
        telefono_empleado,
        direccion_empleado,
        correo_empleado
    } = req.body;
    
    const updateEmpleado = await EmpleadoServices.EmpleadoDataUpdate(
      new DataEmpleado(
        cc_empleado,
        nombre_empleado,
        nuevo_correo_empleado,
        telefono_empleado,
        direccion_empleado
      ),
      correo_empleado as string
    );
    return res.status(201).json(
      { status: 'update ok'}
    );

  } catch (error: any) {
    console.error("Error en la actualizacion:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default EmpleadoDataUpdate;


