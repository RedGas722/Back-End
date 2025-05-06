import express from "express";
import filterByCategory from "../../controllers/CategoriaControllers/CategoriaFilterByCategoryController";
const router = express.Router();


router.get('/', filterByCategory);


export default router;