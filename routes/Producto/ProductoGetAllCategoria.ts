import express from "express";
import ProductoGetAllCategoria from "../../controllers/ProductoControllers/ProductoGetAllCategoria";

const router = express.Router();


router.get('/', ProductoGetAllCategoria);


export default router;