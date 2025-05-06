import express from "express";
import ServicioGetAll from "../../controllers/ServicioControllers/ServicioGetAllController";

const router = express.Router();


router.get('/', ServicioGetAll);


export default router;