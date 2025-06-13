import { Request, Response } from "express";
import Factura from "../../Dto/FacturaDto/FacturaDto";
import FacturaServices from "../../services/FacturaServices";

let FacturaRegister = async (req: Request, res: Response) => {
  try {
    const {
        fecha_factura,
        id_cliente,
        id_empleado,
        total
    } = req.body;

    const id_factura = await FacturaServices.FacturaRegister(new Factura(fecha_factura, id_cliente, id_empleado, total));

    return res.status(201).json({
      status: 'register ok',
      data: { id_factura }
    });
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
  }
}

export default FacturaRegister;