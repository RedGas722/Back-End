import express from "express";
import ServicioGet from "../../controllers/ServicioControllers/ServicioGetController";
import { ServicioGetValidator, ServicioGetValidatorParams } from "../../middleware/Validations/ServicioValidations/ServicioGetValidation";

const router = express.Router();


router.get('/', ServicioGetValidatorParams, ServicioGetValidator, ServicioGet);


export default router;