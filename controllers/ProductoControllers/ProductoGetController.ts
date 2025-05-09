import { Request, Response } from "express";
import ProductoServices from "../../services/ProductoServices";

let ProductoGet = async (req: Request, res: Response) => {
  try {
    const { nombre_producto } = req.query;
    const getProducto = await ProductoServices.ProductoGet(nombre_producto as string);

    if (Array.isArray(getProducto) && getProducto.length > 0) {
      const producto = getProducto[0] as { imagen: Buffer };

      res.status(200).json({
        status: 'Consult ok',
        data: {
          ...producto,
          imagen: producto.imagen.toString('base64'), // conversión directa
        },
      });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export default ProductoGet;
