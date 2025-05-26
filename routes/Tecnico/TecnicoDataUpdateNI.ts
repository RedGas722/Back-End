import express from "express";
import TecnicoDataUpdateNI from '../../controllers/TecnicoController/TecnicoDataUpdateNIController';

const router = express.Router();

router.put('/', TecnicoDataUpdateNI);

export default router;
