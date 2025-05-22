import { Router } from "express";
import { CartTotalController } from "../../controllers/CartControllers/CartTotalController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.use(verifyToken);

router.get("/", CartTotalController);

export default router;