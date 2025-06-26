import express from "express";
import ProductoGetAllNames from "../../controllers/ProductoControllers/ProductoGetAllNamesController";

const router = express.Router();

router.get("/", ProductoGetAllNames);

export default router;
