import { Request, Response } from "express";
import Categoria from "../../Dto/CategoriaDto/CategoriaDto";
import CategoriaServices from "../../services/CategoriaServices";


let CategoriaUpdate = async (req: Request, res: Response) => {
  try {
    const {
      nuevo_nombre_categoria,
      nombre_categoria
    } = req.body;
    const updateCategoria = await CategoriaServices.CategoriaUpdate(new Categoria(nuevo_nombre_categoria), nombre_categoria as string);
    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default CategoriaUpdate;