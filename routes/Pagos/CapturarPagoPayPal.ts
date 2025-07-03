import express from "express";
import CapturarPago from "../../controllers/PagosControllers/CapturarPagoPayPalController";

const router = express.Router();

router.post("/", CapturarPago);

export default router;
