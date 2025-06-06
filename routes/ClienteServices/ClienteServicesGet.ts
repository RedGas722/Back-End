import { Router } from "express";
import ClienteServicesGetController  from "../../controllers/ClienteServicesControllers/ClienteServicesGetController";
const router = Router();

router.post("/", ClienteServicesGetController);

export default router;