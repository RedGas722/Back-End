import { Router } from "express";
import ClienteChangePassword from "../../controllers/ClienteControllers/ClienteChangePasswordController";
import { clienteChangePasswordValidatorParams, ClienteChangePasswordValidator  } from "../../middleware/Validations/ClienteValidations/ClienteChangePasswordValidation";
import  VerifyToken  from "../../middleware/VerifyToken";
const router = Router();

router.put('/', clienteChangePasswordValidatorParams, ClienteChangePasswordValidator, VerifyToken, ClienteChangePassword);

export default router;