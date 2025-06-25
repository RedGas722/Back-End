import express from "express";
import TecnicoGetAllPaginated from "../../controllers/TecnicoController/TecnicoGetAllPaginatedController";
const router = express.Router();

router.get('/', TecnicoGetAllPaginated);

export default router;