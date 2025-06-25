import express from "express";
import CategoriaGetAllPaginated from "../../controllers/CategoriaControllers/CategoriaGetAllPaginated";

const router = express.Router();


router.get('/', CategoriaGetAllPaginated);


export default router;