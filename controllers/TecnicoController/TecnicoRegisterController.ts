import { Request, Response } from "express";
import Tecnico from "../../Dto/TecnicoDto/TecnicoDto";
import multer from "multer";
import TecnicoServices from "../../services/TecnicoServices";

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }) 

let TecnicoRegister = async (req: Request, res: Response) => {
  try {
    const {
        nombre_tecnico,
        correo_tecnico,
        telefono_tecnico
    } = req.body;

    //por problemas de la ñ
    const contraseña_tecnico = req.body['contraseÃ±a_tecnico'] || req.body.contraseña_tecnico;
    
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo de imagen.' })
    }
    const imagenBuffer = req.file.buffer;

    const registerTecnico = await TecnicoServices.TecnicoRegister(
      new Tecnico(
        nombre_tecnico,
        correo_tecnico,
        telefono_tecnico,
        contraseña_tecnico,
        imagenBuffer
      ) 
    );

    return res.status(201).json({ status: 'register ok'});
  } catch (error: any) {
    console.error("Error in registration:", error);

    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(409).json({ status: 'Duplicate entry', errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
};

export default [upload.single("imagen"), TecnicoRegister];
