import express from "express";
import PagoPaypal from "../../controllers/PagosControllers/PagoPaypalController";
import verifyToken from "../../middleware/VerifyToken";

const router = express.Router();

router.post("/", verifyToken, PagoPaypal);

export default router;
