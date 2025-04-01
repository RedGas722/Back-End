import express from "express";
import TecnicoLoginController from '../../controllers/TecnicoController/TecnicoLoginController';
const router = express.Router();


router.post('/', TecnicoLoginController);
export default router;