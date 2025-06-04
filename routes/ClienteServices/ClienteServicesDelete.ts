import { Router } from "express";
import ClienteServicesDeleteController  from "../../controllers/ClienteServicesControllers/ClienteServicesDeleteController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.delete("/", verifyToken, ClienteServicesDeleteController);

export default router;