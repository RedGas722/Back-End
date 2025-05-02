import express from "express";
import ProductoGet from "../../controllers/ProductoControllers/ProductoGetController";
import { ProductoGetValidator, ProductoGetValidatorParams } from "../../middleware/Validations/ProductoValidations/ProductoGetValidation";
const router = express.Router();


router.get('/', ProductoGetValidatorParams, ProductoGetValidator, ProductoGet);


export default router;