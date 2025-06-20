import { Request, Response } from "express";
import Tecnico from "../../Dto/TecnicoDto/TecnicoDto";
import multer from "multer";
import TecnicoServices from "../../services/TecnicoServices";

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }) 

let TecnicoUpdate = async (req: Request, res: Response) => {
  try {

    const {
        cc_tecnico,
        nombre_tecnico,
        nuevo_correo_tecnico,
        contrasena_tecnico,
        telefono_tecnico,
        correo_tecnico
    } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo de imagen.' })
    }
    const imagenBuffer = req.file.buffer;

    const updateTecnico = await TecnicoServices.TecnicoUpdate(
      new Tecnico(
        cc_tecnico,
        nombre_tecnico,
        nuevo_correo_tecnico,
        telefono_tecnico,
        contrasena_tecnico,
        imagenBuffer
      ),
      correo_tecnico as string
    );

    return res.status(201).json({ status: 'update ok'});
  } catch (error: any) {
    console.error("Error in registration:", error);

    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default TecnicoUpdate;
