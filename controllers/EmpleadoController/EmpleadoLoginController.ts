import { Request, Response } from "express";
import AuthEmpleado from "../../Dto/EmpleadoDto/EmpleadoAuthDto";
import EmpleadoServices from "../../services/EmpleadoServices";
import generateToken from "../../Helpers/generateToken";

let EmpleadoLogin = async (req: Request, res: Response) => {
  try {
    const { correo_empleado, contraseña_empleado } = req.body;

    const loginEmpleado = await EmpleadoServices.login(new AuthEmpleado(correo_empleado, contraseña_empleado));

    // Verifica si el login fue exitoso
    if (loginEmpleado.logged) {
      const tipo_usuario = "empleado";
      return res.status(200).json({
        status: 'login ok',
        tipo_usuario,
        token: generateToken({
          id: loginEmpleado.id,
          name: loginEmpleado.name,
          email: loginEmpleado.email,
          telefono: loginEmpleado.telefono,
          direccion: loginEmpleado.direccion,
          tipo_usuario // también en el payload del token
        }, process.env.KEY_TOKEN, 5)
      });
    }

    // Si las credenciales son incorrectas
    return res.status(401).json({
      status: 'Invalid credentials',
    });
  } catch (error: any) {
    console.error("Error en el login:", error);

    // Responde con un error genérico si ocurre algo inesperado
    return res.status(500).json({
      status: 'Internal server error',
      error: error.message,
    });
  }
};

export default EmpleadoLogin;

