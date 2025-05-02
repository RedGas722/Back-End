import express from "express";
import FacturaGet from "../../controllers/FacturaControllers/FacturaGetController";
import { facturaGetValidation, validateFacturaGet } from "../../middleware/Validations/FacturaValidations/FacturaGetValidation";
const router = express.Router();

router.get('/',facturaGetValidation,validateFacturaGet, FacturaGet);

export default router;