import express from "express";
import CapturarPago from "../../controllers/PagosControllers/CapturarPago";

const router = express.Router();

router.post("/", CapturarPago);

export default router;
