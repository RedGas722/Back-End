import express from "express";
import PedidoProductoGetAll from "../../controllers/PedidoProductoControllers/PedidoProductoGetAllControllers";
const router = express.Router();


router.get('/', PedidoProductoGetAll);


export default router;