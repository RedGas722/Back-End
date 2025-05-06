import express from "express";
import AdministradorDelete from "../../controllers/AdministradorControllers/AdministradorDeleteController";
import { administradorDeleteValidation, validateAdministradorDelete } from "../../middleware/Validations/AdministradorValidations/AdministradorDeleteValidation";
const router = express.Router();



router.delete('/',administradorDeleteValidation, validateAdministradorDelete, AdministradorDelete);


export default router;