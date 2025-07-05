import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import FacturaGetByClient from "../../controllers/FacturaControllers/FacturaGetByClientController";
const router = express.Router();

router.get('/', verifyToken, FacturaGetByClient);

export default router;