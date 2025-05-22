import { Router } from "express";
import ClienteGet from "../../controllers/ClienteControllers/ClienteGetController";
import { ClienteGetValidator, ClienteGetValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteGetValidation";
const router = Router();

router.get('/',  ClienteGetValidatorParams, ClienteGetValidator, ClienteGet);

export default router;