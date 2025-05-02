import express from "express";
import CarritoProductoRegister from "../../controllers/CarritoProducto/CarritoProductoRegisterController";
import { carritoProductoRegisterValidation, validateCarritoProductoRegister } from "../../middleware/Validations/CarritoProductoValidations/CarritoProductoRegisterValidation";
const router = express.Router();


router.post('/', carritoProductoRegisterValidation, validateCarritoProductoRegister, CarritoProductoRegister);


export default router;