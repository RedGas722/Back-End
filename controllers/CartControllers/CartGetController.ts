import { Request, Response } from "express";
import  cartServices  from "../../services/Cart/CartServices";

export const CartGetController = async (req: Request, res: Response) => {
  try {
    const clienteId = req.body.id;
    if (!clienteId) {
      return res.status(401).json({ message: "Cliente no autenticado" });
    }

    const cart = await cartServices.getCart(clienteId);

    return res.status(200).json(cart);
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
