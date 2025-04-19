import express from "express";
import ProductoDelete from "../../controllers/ProductoControllers/ProductoDeleteController";
const router = express.Router();


router.delete('/', ProductoDelete);


export default router;