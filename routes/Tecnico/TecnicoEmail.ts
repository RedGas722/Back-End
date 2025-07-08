import { Router } from "express";
import TecnicoEmail from "../../controllers/TecnicoController/TecnicoEmailController";
const router = Router();

router.post('/', TecnicoEmail);

export default router;