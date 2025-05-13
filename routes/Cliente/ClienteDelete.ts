import express from "express";
import ClienteDelete from "../../controllers/ClienteControllers/ClienteDeleteController";
import { ClienteDeleteValidator, clienteDeleteValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteDeleteValidation";
const router = express.Router();


router.delete('/', clienteDeleteValidatorParams, ClienteDeleteValidator, ClienteDelete);


export default router;