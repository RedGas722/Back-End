import express from "express";
import ClienteLogin from '../../controllers/ClienteControllers/ClienteLoginController';
import { ClienteLoginValidatorParams,ClienteLoginValidator } from "../../middleware/Validations/ClienteValidations/ClienteLoginValidation";
const router = express.Router();


router.post('/', ClienteLoginValidatorParams, ClienteLoginValidator, ClienteLogin);


export default router;