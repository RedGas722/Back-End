import express from "express";
import PedidoRegister from "../../controllers/PedidoControllers/PedidoRegisterController";
const router = express.Router();


router.post('/', PedidoRegister);


export default router;