import { Request, Response } from "express";


let profile = async (req: Request, res: Response) => {
  try {    
    const idUser = req.body.id;
    const nameUser = req.body.name;
    const emailUser = req.body.email;
    const telefonoUser = req.body.telefono;
    const direccionUser = req.body.direccion;
    const imagenUser = req.body.imagen;
    return res.status(200).json(
      { status: 'Get profile Ok', id: idUser, name: nameUser, email: emailUser, telefono: telefonoUser, direccion: direccionUser, imagen: imagenUser }
    );
  } catch (error: any) {
    return res.status(500).json({ errorInfo: "An unknown error has occurred" }
    );
  }
}


export default profile;