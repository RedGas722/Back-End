import { Request, Response } from "express";
import cartServices from "../../services/Cart/CartServices";
import ClienteServices from "../../services/ClienteServices";

export const CartUpdateQuantityController = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const { productId, quantity } = req.body;

    if (!email || !productId || quantity === undefined) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const clienteDB = await ClienteServices.GetCliente(email);
    if (!clienteDB) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const clienteId = clienteDB.id_cliente;

    const updatedCart = await cartServices.updateProductQuantity(clienteId, productId, quantity);
    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error("Error al actualizar la cantidad:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
