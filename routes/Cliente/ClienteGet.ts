import { Router } from "express";
import ClienteGet from "../../controllers/ClienteControllers/ClienteGetController";
const router = Router();

router.get('/',  ClienteGet );

export default router;