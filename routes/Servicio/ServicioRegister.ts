import express from "express";
import ServicioRegister from "../../controllers/ServicioControllers/ServicioRegisterController";
import { ServicioRegisterValidator, ServicioRegisterValidatorParams } from "../../middleware/Validations/ServicioValidations/ServicioRegisterValidation";
const router = express.Router();


router.post('/', ServicioRegisterValidatorParams, ServicioRegisterValidator,ServicioRegister);


export default router;