import { Router } from "express";
import ClienteHistorialServicesAddController  from "../../controllers/ClienteHistorialServicesControllers/ClienteHistorialServicesAddController";
const router = Router();

router.post("/", ClienteHistorialServicesAddController);

export default router;