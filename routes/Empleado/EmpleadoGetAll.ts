import express from "express";
import EmpleadoGetAll from "../../controllers/EmpleadoController/EmpleadoGetAllController";
const router = express.Router();

router.get('/', EmpleadoGetAll);

export default router;