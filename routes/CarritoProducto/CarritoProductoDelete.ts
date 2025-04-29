import express from "express";
import CarritoProductoDelete from "../../controllers/CarritoProducto/CarritoProductoDeleteController";
const router = express.Router();


router.delete('/', CarritoProductoDelete);


export default router;