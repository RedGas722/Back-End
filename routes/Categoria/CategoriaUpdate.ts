import express from "express";
import CategoriaUpdate from "../../controllers/CategoriaControllers/CategoriaUpdateController";
const router = express.Router();


router.put('/', CategoriaUpdate);


export default router;