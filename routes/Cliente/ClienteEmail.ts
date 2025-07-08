import { Router } from "express";
import ClienteEmail from "../../controllers/ClienteControllers/ClienteEmailController";
import { clienteEmailValidatorParams, ClienteEmailValidator } from "../../middleware/Validations/ClienteValidations/ClienteEmailValidation";
const router = Router();

router.post('/', clienteEmailValidatorParams, ClienteEmailValidator, ClienteEmail );

export default router;