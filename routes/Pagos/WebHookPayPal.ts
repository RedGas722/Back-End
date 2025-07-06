import express from "express";
import WebhookPaypalController from "../../controllers/PagosControllers/WebHookPayPalController";

const router = express.Router();

router.post("/", WebhookPaypalController);

export default router;
