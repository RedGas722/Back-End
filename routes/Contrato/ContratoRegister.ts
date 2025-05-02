import express from "express";
import ContratoRegister from "../../controllers/ContratoControllers/ContratoRegisterController";
import { ContratoRegisterValidator, ContratoRegisterValidatorParams } from "../../middleware/Validations/ContratoValidations/ContratoRegisterValidation";
const router = express.Router();


router.post('/', ContratoRegisterValidatorParams, ContratoRegisterValidator, ContratoRegister);


export default router;