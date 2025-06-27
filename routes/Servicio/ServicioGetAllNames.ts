import express from "express";
import ServicioGetAllNames from "../../controllers/ServicioControllers/ServicioGetAllNamesController";

const router = express.Router();

router.get("/", ServicioGetAllNames);

export default router;
