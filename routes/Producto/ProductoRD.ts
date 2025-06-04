import express from "express";
import ProductoResetearDescuentos from "../../controllers/ProductoControllers/ProductoRDController";

const router = express.Router();


router.put('/', ProductoResetearDescuentos);


export default router;