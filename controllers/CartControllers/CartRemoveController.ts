import { Request, Response } from "express";
import cartServices from "../../services/Cart/CartServices";

export const CartRemoveController = async (req: Request, res: Response) => {
  try {
    const { id, productId } = req.body;

    if (!id || !productId) {
      return res.status(400).json({ message: "Faltan datos: email o productId" });
    }

    const updatedCart = await cartServices.removeFromCart(id, productId);

    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error("Error al eliminar del carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
