import { Router } from "express";
import { CartClearByEmailController } from "../../controllers/CartControllers/CartClearByEmail";
const router = Router();

router.delete("/", CartClearByEmailController);

export default router;