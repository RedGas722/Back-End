import express from "express";
import AdministradorLogin from '../../controllers/AdministradorControllers/AdministradorLoginController';
const router = express.Router();
import { administradorLoginValidation, validateAdministradorLogin } from "../../middleware/Validations/AdministradorValidations/AdministradorLoginValidation";



router.post('/',administradorLoginValidation, validateAdministradorLogin, AdministradorLogin);


export default router;