import { Router } from "express";
import AdminEmail from "../../controllers/AdministradorControllers/AdministradorEmailController";
const router = Router();

router.post('/', AdminEmail );

export default router;