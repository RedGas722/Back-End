import { Request, Response } from "express";
import generateToken from "../../Helpers/generateToken";

const SECRET = process.env.KEY_RECOVERY || "clave_temporal";

const GenerateTokenRecovery = async (req: Request, res: Response) => {
  try {
    const { correo_cliente } = req.body;

    if (!correo_cliente) {
      return res.status(400).json({ error: "Correo requerido" });
    }

    // Validar si el correo existe
    const clienteRes = await fetch(`https://redgas.onrender.com/ClienteGet?correo_cliente=${correo_cliente}`);
    const clienteData = await clienteRes.json();

    if (!clienteData?.data?.id_cliente) {
      return res.status(404).json({ error: "Correo no registrado" });
    }

    // Generar token válida por 10 minutos
    const token = generateToken({ correo: correo_cliente }, SECRET, 10);

    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Error interno al generar token" });
  }
};

export default GenerateTokenRecovery;
