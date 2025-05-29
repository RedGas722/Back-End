import express from "express";
import DiagnosticApiIA from "../../controllers/IAControllers/DiagnosticIAController";

const router = express.Router();


router.post('/', DiagnosticApiIA);


export default router;