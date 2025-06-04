import express from "express";
import ProductoRepository from "../../repositories/ProductoRepository";
const router = express.Router();


router.put('/', async (req, res) => {
  try {
    await ProductoRepository.resetearDescuentosDePrueba();
    res.status(200).json({ message: 'Descuentos reseteados correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al resetear descuentos' });
  }
});


export default router;