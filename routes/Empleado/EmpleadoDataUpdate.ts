import express from "express";
import EmpleadoDataUpdate from "../../controllers/EmpleadoController/EmpleadoDataUpdateController";
const router = express.Router();

router.put('/', EmpleadoDataUpdate);

export default router;