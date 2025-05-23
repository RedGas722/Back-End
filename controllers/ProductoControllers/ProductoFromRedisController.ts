import { Request, Response } from "express";
import  ProductoServices from "../../services/ProductoServices";

let ProductoFromRedis = async (req: Request, res: Response) => {
  try {
    const products = await ProductoServices.getProductsFromRedis();

    if (!products.length) {
      return res.status(404).json({ message: "No hay productos en Redis" });
    }

    return res.status(200).json(products);
  } catch (error) {
    console.error("Error en getProductsFromRedisController:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default ProductoFromRedis;