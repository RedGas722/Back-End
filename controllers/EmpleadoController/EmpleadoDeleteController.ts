import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";

let EmpleadoDelete = async (req: Request, res: Response) => {
  try {
    const {
        correo_empleado
    } = req.body;

    // Verifica que los campos requeridos no estén vacíos
    if (!correo_empleado) {
      return res.status(400).json({ status: 'Missing required fields' });
    }

    const deleteEmpleado = await EmpleadoServices.EmpleadoDelete(correo_empleado);

    return res.status(201).json({ status: 'delete ok'});
  } catch (error: any) {
    console.error("Error en el registro:", error);
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default EmpleadoDelete;

