import { Router } from "express";
import  VerifyToken  from "../../middleware/VerifyToken";
import AdministradorChangePassword from "../../controllers/AdministradorControllers/AdministradorChangePasswordController";
const router = Router();

router.put('/', VerifyToken, AdministradorChangePassword);

export default router;