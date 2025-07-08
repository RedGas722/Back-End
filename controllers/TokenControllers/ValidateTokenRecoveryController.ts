import { Request, Response } from "express";
import ValidateTokenRecoveryService from "../../services/ValidateTokenRecoveryService";

const ValidateToken = async (req: Request, res: Response) => {
  try {
    const token = req.query.token as string;

    if (!token) {
      return res.status(400).json({ error: "Token no proporcionado" });
    }

    const resultado = await ValidateTokenRecoveryService.validate(token);

    if (!resultado.valido) {
      return res.status(401).json({ error: "Token inválido o expirado" });
    }

    return res.status(200).json({
      status: "valido",
      correo: resultado.correo,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Error interno" });
  }
};

export default ValidateToken;
