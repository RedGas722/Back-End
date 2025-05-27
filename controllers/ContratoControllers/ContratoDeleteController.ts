import { Request, Response } from "express";
import ContratoServices from "../../services/ContratoServices";


let ContratoDelete = async (req: Request, res: Response) => {
  try {
    const {
      id_empleado
    } = req.query;

    console.log('ID empleado recibido en ContratoDelete:', id_empleado);
    if (!id_empleado) {
      return res.status(400).json({ status: 'Missing required fields' });
    }
    // Eliminar contratos por id_empleado
    await ContratoServices.ContratoDelete(Number(id_empleado));
    return res.status(201).json({ status: 'delete ok' });
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
          return res.status(500).json({ errorInfo: error.sqlMessage }
          )
        }
        return res.status(500).json({ status: 'Internal server error', error: error.message });
      }
}

export default ContratoDelete;