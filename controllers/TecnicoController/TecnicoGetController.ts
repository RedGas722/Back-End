import { Request, Response } from "express";
import TecnicoServices from "../../services/TecnicoServices";

let TecnicoGet = async (req: Request, res: Response) => {
  try {
    const { correo_tecnico } = req.query;
    const getTecnico = await TecnicoServices.getbyEmail(correo_tecnico as string);

    if (Array.isArray(getTecnico) && getTecnico.length > 0) {
      const Tecnico = getTecnico[0] as { imagen: Buffer };

      res.status(200).json({
        status: 'Consult ok',
        data: {
          ...Tecnico,
          imagen: Tecnico.imagen.toString('base64'), // conversión directa
        },
      });
    } else {
      res.status(404).json({ error: 'Tecnico no encontrado' });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export default TecnicoGet;
