import { Request, Response } from "express";
import FacturaServices from "../../services/FacturaServices";


let FacturaUpdate = async (req: Request, res: Response) => {
  try {
    const {
      estado_factura,
      id_factura
    } = req.body;
    const updateFactura = await FacturaServices.FacturaUpdate(
      estado_factura as string,
      id_factura as number
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