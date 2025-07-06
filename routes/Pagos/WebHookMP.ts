import express from "express";
import WebhookMPController from "../../controllers/PagosControllers/WebHookMPController";

const router = express.Router();

router.post("/", WebhookMPController);

export default router;
