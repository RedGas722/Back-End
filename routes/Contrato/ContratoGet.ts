import express from "express";
import ContratoGet from "../../controllers/ContratoControllers/ContratoGetController";
import { ContratoGetValidator, ContratoGetValidatorParams } from "../../middleware/Validations/ContratoValidations/ContratoGetValidation";
const router = express.Router();

router.get('/', ContratoGetValidatorParams, ContratoGetValidator, ContratoGet);

export default router;