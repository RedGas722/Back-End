import express from "express";
import ProductoDelete from "../../controllers/ProductoControllers/ProductoDeleteController";
import { ProductoDeleteValidator, ProductoDeleteValidatorParams } from "../../middleware/Validations/ProductoValidations/ProductoDeleteValidation";
const router = express.Router();


router.delete('/', ProductoDeleteValidatorParams, ProductoDeleteValidator, ProductoDelete);


export default router;