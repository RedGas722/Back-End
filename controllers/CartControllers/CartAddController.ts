import { Request, Response } from "express";
import  cartServices from "../../services/Cart/CartServices";

export const CartAddController = async (req: Request, res: Response) => {
  try {
    const clienteId = req.body.id;
    if (!clienteId) {
      return res.status(401).json({ message: "Cliente no autenticado" });
    }

    const { productId, productName, quantity, price, discount } = req.body;

    if (!productId || !productName || !quantity || !price || discount === undefined || discount === null) {
    return res.status(400).json({ message: "Datos del producto incompletos" });
  }

    // Llama a servicio para agregar al carrito con productName incluido
    const cart = await cartServices.addToCart(clienteId, { productId, productName, quantity, price, discount});

    return res.status(200).json(cart);
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
