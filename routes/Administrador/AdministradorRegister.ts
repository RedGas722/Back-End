import express from "express";
import AdministradorRegister from '../../controllers/AdministradorControllers/AdministradorRegisterController';
import { administradorRegisterValidation, validateAdministradorRegister } from '../../middleware/Validations/AdministradorValidations/AdministradorRegisterValidation';
const router = express.Router();

router.post('/', administradorRegisterValidation, validateAdministradorRegister, AdministradorRegister);

export default router;