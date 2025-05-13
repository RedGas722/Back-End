import express from "express";
import CategoriaGet from "../../controllers/CategoriaControllers/CategoriaGet";
const router = express.Router();


router.get('/', CategoriaGet);


export default router;