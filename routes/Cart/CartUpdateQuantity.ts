import { Router } from "express";
import { CartUpdateQuantityController } from "../../controllers/CartControllers/CartUpdateQuantityController";
import verifyToken from "../../middleware/VerifyToken";

const router = Router();

router.put("/", verifyToken, CartUpdateQuantityController);

export default router;
