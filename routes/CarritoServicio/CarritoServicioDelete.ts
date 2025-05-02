import express from "express";
import CarritoServicioDelete from "../../controllers/CarritoServicio/CarritoServicioDeleteController";
import { CarritoServicioDeleteValidator, CarritoServicioDeleteValidatorParams } from "../../middleware/Validations/CarritoServicioValidations/CarritoServicioDeleteValidation";
const router = express.Router();


router.delete('/', CarritoServicioDeleteValidatorParams, CarritoServicioDeleteValidator, CarritoServicioDelete);


export default router;