import { Router } from "express";
import EmpleadoEmail from "../../controllers/EmpleadoController/EmpleadoEmailController";
const router = Router();

router.post('/', EmpleadoEmail);

export default router;