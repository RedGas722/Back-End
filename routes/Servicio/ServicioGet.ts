import express from "express";
import ServicioGet from "../../controllers/ServicioControllers/ServicioGetController";

const router = express.Router();


router.get('/', ServicioGet);


export default router;