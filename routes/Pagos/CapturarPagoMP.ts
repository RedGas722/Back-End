import express from "express";
import ConsultarPagoMercadoPago from "../../controllers/PagosControllers/CapturarPagoMPController";
const router = express.Router();

router.post("/", ConsultarPagoMercadoPago);

export default router;
