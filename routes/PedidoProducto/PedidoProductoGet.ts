import express from "express";
import PedidoProductoGet from "../../controllers/PedidoProductoControllers/PedidoProductoGetController";
const router = express.Router();


router.post('/', PedidoProductoGet);


export default router;