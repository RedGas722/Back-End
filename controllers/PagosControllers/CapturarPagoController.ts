import { Request, Response } from "express";
import PagosService from "../../services/PagosServices/PagoPaypalService";

const CapturarPago = async (req: Request, res: Response) => {
  try {
    const { orderID } = req.body;

    if (!orderID) {
      return res.status(400).json({ error: "Falta el orderID" });
    }

    const resultado = await PagosService.CapturarPago(orderID);

    return res.status(200).json({
      status: "Pago capturado con éxito",
      data: resultado,
    });
  } catch (error: any) {
    console.error("Error al capturar el pago:", error);
    return res.status(500).json({
      errorInfo: error.message || "Error interno al capturar el pago",
    });
  }
};

export default CapturarPago;
