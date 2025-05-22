import express from "express";
import FacturaRegister from "../../controllers/FacturaControllers/FacturaRegisterController";
import { facturaRegisterValidation, validateFacturaRegister } from "../../middleware/Validations/FacturaValidations/FacturaRegisterValidation";
import { validateFacturaEntitiesExist } from "../../middleware/Validations/FacturaValidations/FacturaEntitiesID";

const router = express.Router();


router.post('/', facturaRegisterValidation, validateFacturaRegister , validateFacturaEntitiesExist, FacturaRegister);


export default router;