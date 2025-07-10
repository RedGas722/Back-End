import { Request, Response } from "express";
import cartServices from "../../services/Cart/CartServices";
import ClienteRepository from "../../repositories/ClienteRepository";

export const CartClearByEmailController = async (req: Request, res: Response) => {
  try {
    const email = req.query.correo_cliente as string;

    if (!email) {
      return res.status(400).json({ message: "Correo no proporcionado" });
    }

    const cliente = await ClienteRepository.getByEmail(email);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    await cartServices.clearCart(cliente.id_cliente);

    return res.status(200).json({ message: "Carrito limpiado con éxito" });
  } catch (error) {
    console.error("Error al limpiar carrito por email:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
