import express from "express";
import ProductoGetById from "../../controllers/ProductoControllers/ProductoGetByIdController";
const router = express.Router();


router.get('/', ProductoGetById);


export default router;