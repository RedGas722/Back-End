import { Request, Response } from "express";
import  cartServices  from "../../services/Cart/CartServices";
import ClienteServices from "../../services/ClienteServices";

const CartTotalController = async (req: Request, res: Response) => {
  const cliente = req.cliente;

  if (!cliente) {
    return res.status(401).json({ message: "Cliente no autenticado" });
  }

  try {
    const clienteDB = await ClienteServices.GetCliente(cliente.correo_cliente);
    if (!clienteDB) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const clienteId = clienteDB.id_cliente;

    const total = await cartServices.getTotal(clienteId);

    res.status(200).json({ total });
  } catch (error) {
    console.error("Error al obtener el total del carrito:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default CartTotalController;