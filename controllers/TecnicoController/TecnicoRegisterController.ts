import { Request, Response } from "express";
import Tecnico from "../../Dto/TecnicoDto/TecnicoDto";
import TecnicoServices from "../../services/TecnicoServices";

let register = async (req: Request, res: Response) => {
  try {
    const {
        nombre_tecnico,
        correo,
        telefono,
        direccion_tecnico,
        contraseña_tecnico,
    } = req.body;

    // Verifies that required fields are not empty
    if (!nombre_tecnico || !correo || !contraseña_tecnico) {
      return res.status(400).json({ status: 'Missing required fields' });
    }

    // Create a new instance of Tecnico
    const registerTecnico = await TecnicoServices.register(
      new Tecnico(
        nombre_tecnico,
        correo,
        telefono,
        direccion_tecnico,
        contraseña_tecnico
      )
    );

    return res.status(201).json({ status: 'register ok', data: registerTecnico });
  } catch (error: any) {
    console.error("Error in registration:", error);
    // Handles duplicate entry error (e.g. if the email already exists)
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default register;
