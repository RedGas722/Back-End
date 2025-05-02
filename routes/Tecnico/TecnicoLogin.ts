import express from "express";
import TecnicoLogin from '../../controllers/TecnicoController/TecnicoLoginController';
import { tecnicoLoginValidation, validateTecnicoLogin } from "../../middleware/Validations/TecnicoValidations/TecnicoLoginValidation";
const router = express.Router();

router.post('/',tecnicoLoginValidation, validateTecnicoLogin, TecnicoLogin);

export default router;