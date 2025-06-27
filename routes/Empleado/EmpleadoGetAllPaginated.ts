import express from "express";
import EmpleadoGetAllPaginated from "../../controllers/EmpleadoController/EmpleadoGetAllPaginatedController";
const router = express.Router();

router.get('/', EmpleadoGetAllPaginated);

export default router;