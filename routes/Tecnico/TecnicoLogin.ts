import express from "express";
import TecnicoLogin from '../../controllers/TecnicoController/TecnicoLoginController';
const router = express.Router();

router.post('/', TecnicoLogin);

export default router;