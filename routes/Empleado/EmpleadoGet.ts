import express from "express";
import EmpleadoGet from '../../controllers/EmpleadoController/EmpleadoGetController';
const router = express.Router();

router.get('/', EmpleadoGet);

export default router;