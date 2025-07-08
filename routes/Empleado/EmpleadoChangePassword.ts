import { Router } from "express";
import  VerifyToken  from "../../middleware/VerifyToken";
import EmpleadoChangePassword from "../../controllers/EmpleadoController/EmpleadoChangePasswordController";
const router = Router();

router.put('/', VerifyToken, EmpleadoChangePassword);

export default router;