import express from "express";
import TecnicoRegister from '../../controllers/TecnicoController/TecnicoRegisterController';
const router = express.Router();

router.post('/', TecnicoRegister);

export default router;