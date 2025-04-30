import express from "express";
import CategoriaDelete from "../../controllers/CategoriaControllers/CategoriaDeleteController";
const router = express.Router();


router.delete('/', CategoriaDelete);


export default router;