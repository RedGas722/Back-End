import { Request, Response } from "express";
import cartServices from "../../services/Cart/CartServices";

export const CartUpdateQuantityController = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const { productId, quantity } = req.body;

    if (!id|| !productId || quantity === undefined) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const updatedCart = await cartServices.updateProductQuantity(id, productId, quantity);
    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error("Error al actualizar la cantidad:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
