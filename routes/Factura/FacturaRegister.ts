import express from "express";
import FacturaRegister from "../../controllers/FacturaControllers/FacturaRegisterController";
import { facturaRegisterValidation, validateFacturaRegister } from "../../middleware/Validations/FacturaValidations/FacturaRegisterValidation";

const router = express.Router();


router.post('/', facturaRegisterValidation, validateFacturaRegister , FacturaRegister);


export default router;