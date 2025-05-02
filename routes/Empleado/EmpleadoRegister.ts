import express from "express";
import EmpleadoRegister from '../../controllers/EmpleadoController/EmpleadoRegisterController';
import { empleadoRegisterValidation, validateEmpleadoRegister } from '../../middleware/Validations/EmpleaoValidations/EmpleadoRegisterValidation';

const router = express.Router();

router.post('/', empleadoRegisterValidation, validateEmpleadoRegister, EmpleadoRegister);

export default router;
