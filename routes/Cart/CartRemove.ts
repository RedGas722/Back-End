import { Router } from "express";
import { CartRemoveController } from "../../controllers/CartControllers/CartRemoveController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.delete("/", verifyToken, CartRemoveController);

export default router;