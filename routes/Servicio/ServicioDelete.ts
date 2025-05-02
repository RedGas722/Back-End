import express from "express";
import ServicioDelete from "../../controllers/ServicioControllers/ServicioDeleteController";
import { ServicioDeleteValidator, ServicioDeleteValidatorParams } from "../../middleware/Validations/ServicioValidations/ServicioDeleteValidation";
const router = express.Router();


router.delete('/', ServicioDeleteValidatorParams, ServicioDeleteValidator, ServicioDelete);


export default router;