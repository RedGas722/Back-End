import { Router } from "express";
import { CartAddController } from "../../controllers/CartControllers/CartAddController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.use(verifyToken);

router.post("/", CartAddController);

export default router;