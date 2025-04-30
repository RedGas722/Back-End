import { Request, Response } from "express";
import Factura from "../../Dto/FacturaDto/FacturaDto";
import FacturaServices from "../../services/FacturaServices";


let FacturaUpdate = async (req: Request, res: Response) => {
  try {
    const {
        id_factura,
        fecha_factura,
        id_cliente,
        id_empleado
    } = req.body;
    const updateFactura = await FacturaServices.FacturaUpdate(
      new Factura(
         fecha_factura,
         id_cliente, 
         id_empleado
      )
      , id_factura as number
    );
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


export default FacturaUpdate;