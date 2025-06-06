import { Router } from "express";
import ClienteServicesGetController  from "../../controllers/ClienteServicesControllers/ClienteServicesGetController";
const router = Router();

router.get("/", ClienteServicesGetController);

export default router;