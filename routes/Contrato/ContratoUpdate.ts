import express from "express";
import ContratoUpdate from "../../controllers/ContratoControllers/ContratoUpdateController";
import { ContratoUpdateValidator, ContratoUpdateValidatorParams } from "../../middleware/Validations/ContratoValidations/ContratoUpdateValidation";
const router = express.Router();


router.put('/', ContratoUpdateValidatorParams, ContratoUpdateValidator, ContratoUpdate);


export default router;