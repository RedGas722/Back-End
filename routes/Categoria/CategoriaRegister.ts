import express from "express";
import CategoriaRegister from "../../controllers/CategoriaControllers/CategoriaRegisterController";
import { categoriaRegisterValidation, validateCategoriaRegister } from "../../middleware/Validations/CategoriaValidations/CategoriaRegisterValidation";
const router = express.Router();


router.post('/', categoriaRegisterValidation, validateCategoriaRegister, CategoriaRegister);


export default router;