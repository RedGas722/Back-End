import { Router } from "express";
import { CartGetController } from "../../controllers/CartControllers/CartGetController";
const router = Router();

router.get("/", CartGetController);

export default router;