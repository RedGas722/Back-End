import express from "express";
import TecnicoUpdate from '../../controllers/TecnicoController/TecnicoUpdateController';
const router = express.Router();

router.put('/', TecnicoUpdate);

export default router;