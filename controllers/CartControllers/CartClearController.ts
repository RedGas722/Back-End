import { Request, Response } from "express";
import cartServices from "../../services/Cart/CartServices";

export const CartClearController = async (req: Request, res: Response) => {
  try {
    const clienteId = req.body.id;  
    if (!clienteId) {
      return res.status(401).json({ message: "Cliente no autenticado" });
    }

    await cartServices.clearCart(clienteId);

    return res.status(200).json({ message: "Carrito limpiado correctamente" });
  } catch (error) {
    console.error("Error al limpiar el carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
