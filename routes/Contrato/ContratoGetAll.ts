import express from "express";
import ContratoGetAll from "../../controllers/ContratoControllers/ContratoGetAll";
const router = express.Router();

router.get('/', ContratoGetAll);

export default router;