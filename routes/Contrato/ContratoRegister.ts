import express from "express";
import ContratoRegister from "../../controllers/ContratoControllers/ContratoRegisterController";
const router = express.Router();


router.post('/', ContratoRegister);


export default router;