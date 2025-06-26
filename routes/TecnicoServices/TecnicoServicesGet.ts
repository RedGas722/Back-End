import { Router } from "express";
import TecnicoServicesGetController  from "../../controllers/TecnicoServicesControllers/TecnicoServicesGetController";
const router = Router();

router.post("/", TecnicoServicesGetController);

export default router;