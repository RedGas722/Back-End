import { Router } from "express";
import TecnicoServicesDeleteController  from "../../controllers/TecnicoServicesControllers/TecnicoServicesDeleteController";
const router = Router();

router.delete("/", TecnicoServicesDeleteController);

export default router;