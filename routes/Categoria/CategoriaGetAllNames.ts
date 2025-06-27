import express from "express";
import CategoriaGetAllNames from "../../controllers/CategoriaControllers/CategoriaGetAllNamesController";

const router = express.Router();

router.get("/", CategoriaGetAllNames);

export default router;
