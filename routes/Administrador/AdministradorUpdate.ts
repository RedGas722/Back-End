import express from "express";
import AdministradorUpdate from '../../controllers/AdministradorControllers/AdministradorUpdateController';
import { administradorUpdateValidation, validateAdministradorUpdate } from "../../middleware/Validations/AdministradorValidations/AdministradorUpdateValidation";
const router = express.Router();


router.put('/',administradorUpdateValidation, validateAdministradorUpdate, AdministradorUpdate);


export default router;
