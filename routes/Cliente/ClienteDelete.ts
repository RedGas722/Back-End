import express from "express";
import ClienteDelete from "../../controllers/ClienteControllers/ClienteDeleteController";
import { ClienteDeleteValidator, ClienteDeleteValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteDeleteValidation";
const router = express.Router();


router.delete('/', ClienteDeleteValidatorParams, ClienteDeleteValidator, ClienteDelete);


export default router;