import { Router } from "express";
import ClienteServicesGetController  from "../../controllers/ClienteServicesControllers/ClienteServicesGetController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.get("/", ClienteServicesGetController);

export default router;