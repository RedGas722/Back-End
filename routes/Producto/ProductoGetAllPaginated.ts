import express from "express";
import ProductoGetAllPaginated from "../../controllers/ProductoControllers/ProductoGetAllPaginatedController";

const router = express.Router();


router.get('/', ProductoGetAllPaginated);


export default router;