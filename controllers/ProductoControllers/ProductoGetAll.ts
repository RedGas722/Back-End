import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoGetAll = async (req: Request, res: Response) => {
    console.log("Entrando a ProductoGetAll");  // <-- para confirmar que entra

  try {
    const productos = await ProductoServices.ProductoGetAll();
    console.log(productos)
    return res.json({
      status: "Consult ok",
      data: productos
    });
  } catch (error: any) {
    if (error && error.code === "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ error: error.message || "Error inesperado" });
  }
};

export default ProductoGetAll;
