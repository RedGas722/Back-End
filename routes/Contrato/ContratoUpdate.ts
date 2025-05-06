import express from "express";
import ContratoUpdate from "../../controllers/ContratoControllers/ContratoUpdateController";
const router = express.Router();


router.put('/', ContratoUpdate);


export default router;