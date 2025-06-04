import express from "express";
import ProductoRepository from "../../repositories/ProductoRepository";
const router = express.Router();


router.put('/', ProductoRepository.resetearDescuentosDePrueba);


export default router;