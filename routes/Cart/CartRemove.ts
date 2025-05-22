import { Router } from "express";
import { CartRemoveController } from "../../controllers/CartControllers/CartRemoveController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.use(verifyToken);

router.delete("/", CartRemoveController);

export default router;