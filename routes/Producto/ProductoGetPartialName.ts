
import express from "express";
import ProductoGetPartialName from "../../controllers/ProductoControllers/ProductoGetPartialName";
const router = express.Router();


router.get("/", ProductoGetPartialName);


export default router;