import express from "express";
import PagoPaypal from "../../controllers/PagosControllers/PagoPaypalController";

const router = express.Router();

router.post("/", PagoPaypal);

export default router;
