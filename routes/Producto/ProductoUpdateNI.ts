import express from "express";
import ProductoUpdateNI from "../../controllers/ProductoControllers/ProductoUpdateNIController";
const router = express.Router();


router.put('/', ProductoUpdateNI);


export default router;