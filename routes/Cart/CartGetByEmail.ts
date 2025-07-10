import { Router } from "express";
import { CartGetByEmailController } from "../../controllers/CartControllers/CartGetByEmailController";
const router = Router();

router.get("/", CartGetByEmailController);

export default router;