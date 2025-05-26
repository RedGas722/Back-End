import { Request, Response } from "express";
import { cartServices } from "../../services/Cart/CartServices";
import ClienteServices from "../../services/ClienteServices";

export const CartGetController = async (req: Request, res: Response) => {
  try {
    const clienteEmail = req.body.email;
    if (!clienteEmail) {
      return res.status(401).json({ message: "Cliente no autenticado" });
    }

    const clienteDB = await ClienteServices.GetCliente(clienteEmail);
    if (!clienteDB) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const clienteId = clienteDB.id_cliente;

    // Llama a servicio para obtener el carrito
    const cart = await cartServices.getCart(clienteId);

    return res.status(200).json(cart);
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
