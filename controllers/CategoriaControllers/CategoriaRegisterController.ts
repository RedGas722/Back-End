import { Request, Response } from "express";
import Categoria from "../../Dto/CategoriaDto/CategoriaDto";
import CategoriaServices from "../../services/CategoriaServices";


let CategoriaRegister = async (req: Request, res: Response) => {
  try {
    const {
      nombre_categoria,
    } = req.body;
    const registerCategoria = await CategoriaServices.CategoriaRegister(new Categoria(nombre_categoria))
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


export default CategoriaRegister;