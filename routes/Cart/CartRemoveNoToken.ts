import { Router } from "express";
import { CartRemoveController } from "../../controllers/CartControllers/CartRemoveController";
const router = Router();

router.delete("/", CartRemoveController);

export default router;