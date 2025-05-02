import express from "express";
import EmpleadoLogin from '../../controllers/EmpleadoController/EmpleadoLoginController';
import { empleadoLoginValidation, validateEmpleadoLogin } from '../../middleware/Validations/EmpleaoValidations/EmpleadoLoginValidation';
const router = express.Router();

router.post('/',empleadoLoginValidation, validateEmpleadoLogin, EmpleadoLogin);

export default router;