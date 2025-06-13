import express from "express";
import PedidoServicioGetAll from "../../controllers/PedidoServicioController/PedidoServicioGetAllController";
const router = express.Router();


router.get('/', PedidoServicioGetAll);


export default router;