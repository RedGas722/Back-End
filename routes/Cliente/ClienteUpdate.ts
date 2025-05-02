import express from "express";
import ClienteUpdate from "../../controllers/ClienteControllers/ClienteUpdateController";
import { ClienteUpdateValidator, ClienteUpdateValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteUpdateValidation";
const router = express.Router();


router.put('/', ClienteUpdateValidatorParams, ClienteUpdateValidator, ClienteUpdate);


export default router;