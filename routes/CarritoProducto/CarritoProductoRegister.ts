import express from "express";
import CarritoProductoRegister from "../../controllers/CarritoProducto/CarritoProductoRegisterController";
const router = express.Router();


router.post('/', CarritoProductoRegister);


export default router;