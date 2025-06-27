import { Request, Response } from "express";
import EmpleadoServices from "../../services/EmpleadoServices";

const EmpleadoGet = async (req: Request, res: Response) => {
  try {
    const { correo_empleado } = req.query;

    // Validación del query param
    if (!correo_empleado || typeof correo_empleado !== 'string') {
      return res.status(400).json({
        status: 'error',
        error: 'El parámetro "correo_empleado" es requerido y debe ser una cadena.'
      });
    }

    const empleado = await EmpleadoServices.GetEmpleado(correo_empleado);

    if (!empleado) {
      return res.status(404).json({
        status: 'not found',
        error: `No se encontró ningún empleado con el correo: ${correo_empleado}`
      });
    }

    return res.status(200).json({
      status: 'get ok',
      data: empleado
    });

  } catch (error: any) {
    console.error("Error en la obtención del empleado:", error);
    return res.status(500).json({
      status: 'error',
      error: 'Error interno del servidor: ' + error.message
    });
  }
};

export default EmpleadoGet;
