import express from "express";
import EmpleadoUpdate from '../../controllers/EmpleadoController/EmpleadoUpdateController';
const router = express.Router();

router.put('/', EmpleadoUpdate);

export default router;