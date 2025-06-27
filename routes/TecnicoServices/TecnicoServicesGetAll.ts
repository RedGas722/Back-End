import { Router } from "express";
import TecnicoServicesGetAllController  from "../../controllers/TecnicoServicesControllers/TecnicoServicesGetAllController";
const router = Router();

router.get("/", TecnicoServicesGetAllController);

export default router;