import { Router } from "express";
import TecnicoServicesAddController  from "../../controllers/TecnicoServicesControllers/TecnicoServicesAddController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.post("/", TecnicoServicesAddController);

export default router;