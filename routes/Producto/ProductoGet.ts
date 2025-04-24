import express from "express";
import ProductoGet from "../../controllers/ProductoControllers/ProductoGetController";
const router = express.Router();


router.get('/', ProductoGet);


export default router;