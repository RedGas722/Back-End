import express from "express";
import TecnicoDataUpdateNI from '../../controllers/TecnicoController/TecnicoDataUpdateNiController';

const router = express.Router();

router.put('/', TecnicoDataUpdateNI);

export default router;
