import express from "express";
import EmpleadoDelete from "../../controllers/EmpleadoController/EmpleadoDeleteController";
import { empleadoDeleteValidation, validateEmpleadoDelete } from "../../middleware/Validations/EmpleaoValidations/EmpleadoDeleteValidation";
const router = express.Router();

router.delete('/', empleadoDeleteValidation, validateEmpleadoDelete, EmpleadoDelete);

export default router;