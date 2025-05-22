import { Router } from "express";
import { CartGetController } from "../../controllers/CartControllers/CartGetController";
import verifyToken from "../../middleware/VerifyToken";
const router = Router();

router.use(verifyToken);

router.get("/", CartGetController);

export default router;