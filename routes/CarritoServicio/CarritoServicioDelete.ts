import express from "express";
import CarritoServicioDelete from "../../controllers/CarritoServicio/CarritoServicioDeleteController";
const router = express.Router();


router.delete('/', CarritoServicioDelete);


export default router;