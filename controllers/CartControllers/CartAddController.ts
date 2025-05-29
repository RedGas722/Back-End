import { Request, Response } from "express";
import  cartServices from "../../services/Cart/CartServices";
import ClienteServices from "../../services/ClienteServices";

export const CartAddController = async (req: Request, res: Response) => {
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

    const { productId, productName, quantity, price } = req.body;

    if (!productId || !productName || !quantity || !price) {
      return res.status(400).json({ message: "Datos del producto incompletos" });
    }

    // Llama a servicio para agregar al carrito con productName incluido
    const cart = await cartServices.addToCart(clienteId, { productId, productName, quantity, price });

    return res.status(200).json(cart);
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
