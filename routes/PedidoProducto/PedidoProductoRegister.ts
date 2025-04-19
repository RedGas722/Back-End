import express from "express";
import PedidoProductoRegister from "../../controllers/PedidoProductoControllers/PedidoProductoRegisterController";
const router = express.Router();


router.post('/', PedidoProductoRegister);


export default router;