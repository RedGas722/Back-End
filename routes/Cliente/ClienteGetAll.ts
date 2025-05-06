import { Router } from "express";
import ClienteGetAll from "../../controllers/ClienteControllers/ClienteGetAllController";
const router = Router();

router.get('/',  ClienteGetAll );

export default router;