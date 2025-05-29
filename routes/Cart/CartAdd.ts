import { Router } from "express";
import { CartAddController } from "../../controllers/CartControllers/CartAddController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.post("/", verifyToken, CartAddController);

export default router;