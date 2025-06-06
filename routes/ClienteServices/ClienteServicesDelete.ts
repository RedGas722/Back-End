import { Router } from "express";
import ClienteServicesDeleteController  from "../../controllers/ClienteServicesControllers/ClienteServicesDeleteController";
const router = Router();

router.delete("/", ClienteServicesDeleteController);

export default router;