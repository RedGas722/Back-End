import express from "express";
import EmpleadoLogin from '../../controllers/EmpleadoController/EmpleadoLoginController';
const router = express.Router();

router.post('/', EmpleadoLogin);

export default router;