import { Router } from "express";
import ClienteServicesGetAllController  from "../../controllers/ClienteServicesControllers/ClienteServicesGetAllController";
const router = Router();

router.get("/", ClienteServicesGetAllController);

export default router;