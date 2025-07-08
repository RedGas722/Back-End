import { Router } from "express";
import ClienteHistorialServicesDeleteController  from "../../controllers/ClienteHistorialServicesControllers/ClienteHistorialServicesDeleteController";
const router = Router();

router.delete("/", ClienteHistorialServicesDeleteController);

export default router;