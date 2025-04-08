import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";

let EmpleadoGet = async (req: Request, res: Response) => {
  try {
    const {
      correo_empleado
    } = req.query;
    const getEmpleado = await EmpleadoServices.getByEmail(correo_empleado as string)
    return res.status(201).json(
      { status: 'Consult ok',
        data: getEmpleado
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default EmpleadoGet;