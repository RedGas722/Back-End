import express from "express";
import ContratoGet from "../../controllers/ContratoControllers/ContratoGetController";
const router = express.Router();

router.get('/', ContratoGet);

export default router;