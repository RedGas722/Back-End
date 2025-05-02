import express from "express";
import TecnicoGetAll from "../../controllers/TecnicoController/TecnicoGetAllController";
const router = express.Router();

router.get('/', TecnicoGetAll);

export default router;