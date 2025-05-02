import express from "express";
import TecnicoGet from "../../controllers/TecnicoController/TecnicoGetController";
import { tecnicoGetValidation, validateTecnicoGet } from "../../middleware/Validations/TecnicoValidations/TecnicoGetValidation";
const router = express.Router();

router.get('/',tecnicoGetValidation, validateTecnicoGet, TecnicoGet);

export default router;