import express from "express";
import ProductoUpdate from "../../controllers/ProductoControllers/ProductoUpdateController";
import { ProductoUpdateValidator, ProductoUpdateValidatorParams } from "../../middleware/Validations/ProductoValidations/ProductoUpdateValidator";
const router = express.Router();


router.put('/', ProductoUpdateValidatorParams, ProductoUpdateValidator, ProductoUpdate);


export default router;