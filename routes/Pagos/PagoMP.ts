import express from "express";
import PagoMercadoPago from "../../controllers/PagosControllers/PagoMPController";
import verifyToken from "../../middleware/VerifyToken";

const router = express.Router();

router.post("/", verifyToken, PagoMercadoPago);

export default router;
