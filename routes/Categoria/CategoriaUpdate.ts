import express from "express";
import CategoriaUpdate from "../../controllers/CategoriaControllers/CategoriaUpdateController";
import { categoriaUpdateValidation, validateCategoriaUpdate } from "../../middleware/Validations/CategoriaValidations/CategoriaUpdateValidation";
const router = express.Router();


router.put('/', categoriaUpdateValidation, validateCategoriaUpdate, CategoriaUpdate);


export default router;