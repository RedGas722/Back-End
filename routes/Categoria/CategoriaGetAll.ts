import express from "express";
import CategoriaGetAll from "../../controllers/CategoriaControllers/CategoriaGetAll";
const router = express.Router();


router.get('/', CategoriaGetAll);


export default router;