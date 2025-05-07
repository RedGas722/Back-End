import express from "express";
import ClienteRegister from '../../controllers/ClienteControllers/ClienteRegisterController';
import { ClienteRegisterValidator, clienteRegisterValidatorParams } from "../../middleware/Validations/ClienteValidations/ClienteRegisterValidation";
const router = express.Router();


router.post('/', clienteRegisterValidatorParams, ClienteRegisterValidator, ClienteRegister) ;


export default router;