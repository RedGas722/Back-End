import { Router } from "express";
import ClienteServicesAddController  from "../../controllers/ClienteServicesControllers/ClienteServicesAddController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.post("/", verifyToken, ClienteServicesAddController);

export default router;