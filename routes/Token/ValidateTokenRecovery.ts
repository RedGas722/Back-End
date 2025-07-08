import express from "express";
import ValidateToken from "../../controllers/TokenControllers/ValidateTokenRecoveryController";

const router = express.Router();

router.get("/", ValidateToken); 

export default router;
