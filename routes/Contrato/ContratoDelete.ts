import express from "express";
import ContratoDelete from "../../controllers/ContratoControllers/ContratoDeleteController";
const router = express.Router();


router.delete('/', ContratoDelete);


export default router;