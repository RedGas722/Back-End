import express from "express";
import ClienteRegister from '../../controllers/ClienteControllers/ClienteRegisterController';
import { ClienteRegisterValidator, ClienteRegisterValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteRegisterValidation";
const router = express.Router();


router.post('/', ClienteRegisterValidatorParams, ClienteRegisterValidator, ClienteRegister) ;


export default router;