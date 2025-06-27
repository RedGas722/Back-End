import express from "express";
import ClienteGetAllEmails from "../../controllers/ClienteControllers/ClienteGetAllEmailsController";

const router = express.Router();

router.get("/", ClienteGetAllEmails);

export default router;
