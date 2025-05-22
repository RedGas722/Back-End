import express from "express";
import ClienteLogin from '../../controllers/ClienteControllers/ClienteLoginController';
import { clienteLoginValidatorParams,ClienteLoginValidator } from "../../middleware/Validations/ClienteValidations/ClienteLoginValidation";
const router = express.Router();


router.post('/', clienteLoginValidatorParams, ClienteLoginValidator, ClienteLogin);


export default router;