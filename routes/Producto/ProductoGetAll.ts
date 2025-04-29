import express from "express";
import ProductoGetAll from "../../controllers/ProductoControllers/ProductoGetAll";

const router = express.Router();


router.get('/', ProductoGetAll);


export default router;