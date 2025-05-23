import { Router } from "express";
import  ProductosFromRedis  from "../../controllers/ProductoControllers/ProductoFromRedisController";

const router = Router();

router.get("/", ProductosFromRedis);

export default router;