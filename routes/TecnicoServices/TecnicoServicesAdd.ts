import { Router } from "express";
import TecnicoServicesAddController  from "../../controllers/TecnicoServicesControllers/TecnicoServicesAddController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.post("/", verifyToken, TecnicoServicesAddController);

export default router;