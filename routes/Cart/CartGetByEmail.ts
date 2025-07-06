import { Router } from "express";
import { CartGetByEmailController } from "../../controllers/CartControllers/CartGetByEmail";
const router = Router();

router.get("/", CartGetByEmailController);

export default router;