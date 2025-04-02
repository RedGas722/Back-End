import { Request, Response } from "express";
import Factura from "../../Dto/FacturaDto/FacturaDto";
import FacturaServices from "../../services/FacturaServices";


let FacturaRegister = async (req: Request, res: Response) => {
  try {
    const {
        fecha_factura,
        estado_factura,
        total,
        id_pedido,
        id_empleado
    } = req.body;
    const registerFactura = await FacturaServices.FacturaRegister(new Factura(fecha_factura, estado_factura, total, id_pedido, id_empleado));
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


export default FacturaRegister;