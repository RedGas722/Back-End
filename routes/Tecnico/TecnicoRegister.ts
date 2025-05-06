import express from "express";
import TecnicoRegister from '../../controllers/TecnicoController/TecnicoRegisterController';
import { tecnicoRegisterValidation, validateTecnicoRegister } from "../../middleware/Validations/TecnicoValidations/TecnicoRegisterValidation";
const router = express.Router();

router.post('/', tecnicoRegisterValidation, validateTecnicoRegister , TecnicoRegister);

export default router;