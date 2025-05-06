import express from "express";
import filterByCategory from "../../controllers/CategoriaControllers/CategoriaFilterByCategoryController";
import { categoriaFilterByNameValidation, validateCategoriaFilterByName } from "../../middleware/Validations/CategoriaValidations/CategoriaFilterByName";
const router = express.Router();


router.get('/', categoriaFilterByNameValidation, validateCategoriaFilterByName, filterByCategory);


export default router;