import express from "express";
import EmpleadoGet from '../../controllers/EmpleadoController/EmpleadoGetController';
import { empleadoGetValidation, validateEmpleadoGet } from '../../middleware/Validations/EmpleaoValidations/EmpleadoGetValidation';
const router = express.Router();

router.get('/', empleadoGetValidation, validateEmpleadoGet, EmpleadoGet);

export default router;