import express from "express";
import servicioGet from "../../controllers/ServicioControllers/ServicioGetController";
const router = express.Router();


router.get('/', servicioGet);


export default router;