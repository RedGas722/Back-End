import express from "express";
import CarritoServicioRegister from "../../controllers/CarritoServicio/CarritoServicioRegisterController";
import { CarritoServicioRegisterValidator, CarritoServicioRegisterValidatorParams } from "../../middleware/Validations/CarritoServicioValidations/CarritoServicioRegisterValidation";
const router = express.Router();


router.post('/', CarritoServicioRegisterValidatorParams, CarritoServicioRegisterValidator, CarritoServicioRegister);


export default router;