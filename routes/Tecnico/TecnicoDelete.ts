import express from "express";
import TecnicoDelete from "../../controllers/TecnicoController/TecnicoDeleteController";
import { tecnicoDeleteValidation, validateTecnicoDelete } from "../../middleware/Validations/TecnicoValidations/TecnicoDeleteValidation";
const router = express.Router();

router.delete('/', tecnicoDeleteValidation, validateTecnicoDelete , TecnicoDelete);

export default router;