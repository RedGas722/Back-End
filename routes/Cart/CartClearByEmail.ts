import { Router } from "express";
import { CartClearByEmailController } from "../../controllers/CartControllers/CartClearByEmailController";
const router = Router();

router.delete("/", CartClearByEmailController);

export default router;