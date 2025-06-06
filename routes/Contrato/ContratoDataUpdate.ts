import express from "express";
import ContratoDataUpdate from '../../controllers/ContratoControllers/ContratoDataUpdateController';

const router = express.Router();

router.put('/', ContratoDataUpdate);

export default router;
