import express from "express";
import ServicioUpdate from "../../controllers/ServicioControllers/ServicioUpdateController";
import { ServicioUpdateValidator, ServicioUpdateValidatorParams } from "../../middleware/Validations/ServicioValidations/ServicioUpdateValidation";
const router = express.Router();


router.put('/', ServicioUpdateValidatorParams, ServicioUpdateValidator, ServicioUpdate);


export default router;