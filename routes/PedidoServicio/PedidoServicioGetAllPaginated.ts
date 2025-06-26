import express from "express";
import PedidoServicioGetAllPaginated from "../../controllers/PedidoServicioController/PedidoServicioGetAllPaginatedController";
const router = express.Router();


router.get('/', PedidoServicioGetAllPaginated);


export default router;