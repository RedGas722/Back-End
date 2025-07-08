import { Router } from "express";
import ClienteHistorialServicesGetController  from "../../controllers/ClienteHistorialServicesControllers/ClienteHistorialServicesGetController";
const router = Router();

router.post("/", ClienteHistorialServicesGetController);

export default router;