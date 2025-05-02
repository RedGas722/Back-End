import { Request, Response } from "express";
import CategoriaServices from "../../services/CategoriaServices";


let CategoriaDelete = async (req: Request, res: Response) => {
  try {
    const {
      nombre_categoria,
    } = req.query;
    const deleteCategoria = await CategoriaServices.CategoriaDelete(nombre_categoria as string)
    return res.status(201).json(
      { status: 'delete ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default CategoriaDelete;