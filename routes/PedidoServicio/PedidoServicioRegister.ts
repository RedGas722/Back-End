import express from "express";
import PedidoServicioRegister from "../../controllers/PedidoServicioController/PedidoServicioRegisterController";
const router = express.Router();


router.post('/', PedidoServicioRegister);


export default router;