import express from "express";
import PedidoProductoGetAllPaginated from "../../controllers/PedidoProductoControllers/PedidoProductoGetAllPaginatedController";
const router = express.Router();


router.get('/', PedidoProductoGetAllPaginated);


export default router;