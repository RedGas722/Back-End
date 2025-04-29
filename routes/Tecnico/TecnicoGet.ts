import express from "express";
import TecnicoGet from "../../controllers/TecnicoController/TecnicoGetController";
const router = express.Router();

router.get('/', TecnicoGet);

export default router;