import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

const ProductoResetearDescuentos = async (req: Request, res: Response) => {
  try {
    await ProductoServices.ProductoResetearDescuentos();
    return res.status(200).json({ status: 'Descuentos vencidos actualizados correctamente.' });
  } catch (error: any) {
    console.error("Error al resetear descuentos vencidos:", error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default ProductoResetearDescuentos;
