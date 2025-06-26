import express from "express";
import TecnicoGetAllEmails from "../../controllers/TecnicoController/TecnicoGetAllEmailsController";

const router = express.Router();

router.get("/", TecnicoGetAllEmails);

export default router;
