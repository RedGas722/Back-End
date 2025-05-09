import express from "express";
import CategoriaDelete from "../../controllers/CategoriaControllers/CategoriaDeleteController";
import { categoriaDeleteValidation, validateCategoriaDelete } from "../../middleware/Validations/CategoriaValidations/CategoriaDeleteValidation";
const router = express.Router();


router.delete('/', categoriaDeleteValidation, validateCategoriaDelete, CategoriaDelete);


export default router;