import express from "express";
import CategoriaGetAllPaginated from "../../controllers/CategoriaControllers/CategoriaGetAllPaginatedController";

const router = express.Router();


router.get('/', CategoriaGetAllPaginated);


export default router;