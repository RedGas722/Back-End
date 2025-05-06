import { Router } from "express";
import ClienteGet from "../../controllers/ClienteControllers/ClienteGetController";
const router = Router();

router.post('/',  ClienteGet);

export default router;