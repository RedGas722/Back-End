import { Request, Response } from "express";
import Contrato from "../../Dto/ContratoDto/ContratoDto";
import ContratoServices from "../../services/ContratoServices";


let ContratoRegister = async (req: Request, res: Response) => {
  try {
    console.log('Body recibido en ContratoRegister:', req.body);
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
    console.error('Error en ContratoRegister:', error); 
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      )
    }
    return res.status(500).json({ status: 'Internal server error', error: error.message });
  }
}

export default ContratoRegister;