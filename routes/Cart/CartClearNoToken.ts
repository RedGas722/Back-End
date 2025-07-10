import { Router } from "express";
import { CartClearController } from "../../controllers/CartControllers/CartClearController";
const router = Router();

router.delete("/", CartClearController);

export default router;