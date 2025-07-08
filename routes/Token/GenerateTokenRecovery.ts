import express from "express";
import GenerateTokenRecovery from "../../controllers/TokenControllers/GenerateTokenRecoveryController";

const router = express.Router();

router.post("/", GenerateTokenRecovery);

export default router;
