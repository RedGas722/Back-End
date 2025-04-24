import { Request, Response } from "express";
import Contrato from "../../Dto/ContratoDto/ContratoDto";
import ContratoServices from "../../services/ContratoServices";


let ContratoRegister = async (req: Request, res: Response) => {
  try {
    const {
      fecha_contrato,
      duracion_contrato,
      tipo_contrato,
      salario,
      id_admin,
      id_empleado
    } = req.body;
    
    const registerContrato = await ContratoServices.ContratoRegister(new Contrato(fecha_contrato, duracion_contrato, tipo_contrato, salario, id_admin, id_empleado));
    return res.status(201).json(
        { status: 'register ok'}
    )
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
          return res.status(500).json({ errorInfo: error.sqlMessage }
          )
        }
      }
}

export default ContratoRegister;