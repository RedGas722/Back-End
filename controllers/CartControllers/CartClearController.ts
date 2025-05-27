import { Request, Response } from "express";
import cartServices from "../../services/Cart/CartServices";
import ClienteServices from "../../services/ClienteServices";

export const CartClearController = async (req: Request, res: Response) => {
  try {
    const clienteEmail = req.body.email;  // email viene del token
    if (!clienteEmail) {
      return res.status(401).json({ message: "Cliente no autenticado" });
    }

    const clienteDB = await ClienteServices.GetCliente(clienteEmail);
    if (!clienteDB) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const clienteId = clienteDB.id_cliente;

    await cartServices.clearCart(clienteId);

    return res.status(200).json({ message: "Carrito limpiado correctamente" });
  } catch (error) {
    console.error("Error al limpiar el carrito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
