import { Request, Response } from "express";
import Contrato from "../../Dto/ContratoDto/ContratoDto";
import ContratoServices from "../../services/ContratoServices";


let ContratoUpdate = async (req: Request, res: Response) => {
  try {
    const {
      id_contrato,
      fecha_contrato,
      duracion_contrato,
      tipo_contrato,
      salario,
      id_admin,
      id_empleado
    } = req.body;
    
    const updateContrato = await ContratoServices.ContratoUpdate(
      new Contrato(
         fecha_contrato, 
         duracion_contrato, 
         tipo_contrato, 
         salario, 
         id_admin, 
         id_empleado
      ), 
      id_contrato as number
    );
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

export default ContratoUpdate;	