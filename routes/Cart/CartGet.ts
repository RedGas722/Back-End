import { Router } from "express";
import { CartGetController } from "../../controllers/CartControllers/CartGetController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.get("/", verifyToken, CartGetController);

export default router;