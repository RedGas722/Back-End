import express from "express";
import AdministradorGet from "../../controllers/AdministradorControllers/AdministradorGetController";
import { administradorGetValidation, validateAdministradorGet } from "../../middleware/Validations/AdministradorValidations/AdministradorGetValidation";
const router = express.Router();



router.get('/', administradorGetValidation, validateAdministradorGet, AdministradorGet);


export default router;