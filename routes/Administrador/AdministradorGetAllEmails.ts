import express from "express";
import AdministradorGetAllEmails from "../../controllers/AdministradorControllers/AdministradorGetAllEmailsController";
const router = express.Router();

router.get("/", AdministradorGetAllEmails);

export default router;
