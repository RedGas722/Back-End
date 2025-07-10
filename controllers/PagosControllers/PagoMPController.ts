import { Request, Response } from "express";
import PagosService from "../../services/PagosServices/PagoMPServices";

const PagoMercadoPago = async (req: Request, res: Response) => {
  try {
    const {
      cantidad,
      referencia,
      email,
      name,
      telefono,
      direccion,
      id_producto = null
    } = req.body;
    
    const id_cliente = req.body.id; // Obtenemos el id del cliente desde el token

    // Validaciones básicas
    if (!cantidad || !referencia || !email || !id_cliente) {
      return res.status(400).json({
        error: "Faltan datos obligatorios (cantidad, referencia, email, id_cliente)"
      });
    }

    const resultadoPago = await PagosService.PagoMercadoPago({
      cantidad,
      referencia,
      email,
      nombre: name,
      telefono,
      direccion,
      id_cliente,
      id_producto
    });

    return res.status(201).json({
      status: "Pago iniciado con MercadoPago",
      init_point: resultadoPago.init_point,
      data: resultadoPago,
    });

  } catch (error: any) {
    console.error("Error al procesar pago con MercadoPago:", error);
    return res.status(500).json({
      errorInfo: error.message || "Error interno del servidor",
    });
  }
};

export default PagoMercadoPago;
