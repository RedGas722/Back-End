import express from "express";
import EmpleadoRegister from '../../controllers/EmpleadoController/EmpleadoRegisterController';
const router = express.Router();

router.post('/', EmpleadoRegister);

export default router;