import express from "express";
import CategoriaGet from "../../controllers/CategoriaControllers/CategoriaGetController";
const router = express.Router();


router.get('/', CategoriaGet);


export default router;