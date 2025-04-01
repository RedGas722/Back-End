import express from "express";
import EmpleadoLoginController from '../../controllers/EmpleadoController/EmpleadoLoginController';
const router = express.Router();


router.post('/', EmpleadoLoginController);
export default router;