import express from "express";
import ClienteUpdate from "../../controllers/ClienteControllers/ClienteUpdateController";
import { ClienteUpdateValidator, clienteUpdateValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteUpdateValidation";
const router = express.Router();


router.put('/', clienteUpdateValidatorParams, ClienteUpdateValidator, ClienteUpdate);


export default router;