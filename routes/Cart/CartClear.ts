import { Router } from "express";
import { CartClearController } from "../../controllers/CartControllers/CartClearController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.use(verifyToken);

router.delete("/", CartClearController);

export default router;