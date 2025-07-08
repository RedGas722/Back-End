import { Router } from "express";
import  VerifyToken  from "../../middleware/VerifyToken";
import TecnicoChangePassword from "../../controllers/TecnicoController/TecnicoChangePasswordController";
const router = Router();

router.put('/', VerifyToken, TecnicoChangePassword);

export default router;