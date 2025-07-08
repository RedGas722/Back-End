import { Request, Response } from "express";
import generateToken from "../../Helpers/generateToken";

const SECRET = process.env.KEY_RECOVERY || "clave_temporal";

const GenerateTokenRecovery = async (req: Request, res: Response) => {
  try {
    const { correo } = req.body;

    if (!correo) {
      return res.status(400).json({ error: "Correo requerido" });
    }

    // Generar token válida por 10 minutos
    const token = generateToken({ correo: correo }, SECRET, 10);

    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Error interno al generar token" });
  }
};

export default GenerateTokenRecovery;
