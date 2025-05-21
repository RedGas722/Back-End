import express from "express";
import ContratoDelete from "../../controllers/ContratoControllers/ContratoDeleteController";
import { ContratoDeleteValidator, ContratoDeleteValidatorParams } from "../../middleware/Validations/ContratoValidations/ContratoDeleteValidation";
const router = express.Router();

router.delete('/', ContratoDeleteValidatorParams, ContratoDeleteValidator, ContratoDelete);
 

export default router;