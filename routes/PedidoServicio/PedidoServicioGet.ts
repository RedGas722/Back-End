import express from "express";
import PedidoServicioGet from "../../controllers/PedidoServicioController/PedidoServicioGetController";
const router = express.Router();


router.get('/', PedidoServicioGet);


export default router;