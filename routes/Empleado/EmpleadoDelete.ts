import express from "express";
import EmpleadoDelete from "../../controllers/EmpleadoController/EmpleadoDeleteController";
const router = express.Router();

router.delete('/', EmpleadoDelete);

export default router;