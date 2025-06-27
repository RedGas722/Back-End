import express from "express";
import ProductoUpdateStock from "../../controllers/ProductoControllers/ProductoUpdateStock";
const router = express.Router();


router.put('/', ProductoUpdateStock);


export default router;