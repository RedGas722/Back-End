import { Router } from "express";
import CartTotalController  from "../../controllers/CartControllers/CartTotalController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.get("/", verifyToken, CartTotalController);

export default router;