import { Request, Response } from "express";
import CategoriaServices from "../../services/CategoriaServices";

let CategoriaGetAll = async (req: Request, res: Response) => {
  try {
    const GetCategoriaAll = await CategoriaServices.GetAllCategorias();
    return res.status(201).json(
        { status: 'Consult ok', data: GetCategoriaAll}
    )
    } catch (error: any) {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        )
      }
    }
}

export default CategoriaGetAll;