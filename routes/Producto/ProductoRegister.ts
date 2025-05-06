import express from "express";
import ProductoRegister from "../../controllers/ProductoControllers/ProductoRegisterController";
import { ProductoRegisterValidator, ProductoRegisterValidatorParams } from "../../middleware/Validations/ProductoValidations/ProductoRegisterValidation";
const router = express.Router();


router.post('/', ProductoRegisterValidatorParams, ProductoRegisterValidator, ProductoRegister);


export default router;