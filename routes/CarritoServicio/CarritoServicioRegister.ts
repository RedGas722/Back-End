import express from "express";
import CarritoServicioRegister from "../../controllers/CarritoServicio/CarritoServicioRegisterController";
const router = express.Router();


router.post('/', CarritoServicioRegister);


export default router;