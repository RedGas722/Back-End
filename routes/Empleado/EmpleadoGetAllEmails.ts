import express from "express";
import EmpleadoGetAllEmails from "../../controllers/EmpleadoController/EmpleadoGetAllEmailsController";

const router = express.Router();

// Ruta: /api/empleado/emails
router.get("/", EmpleadoGetAllEmails);

export default router;
