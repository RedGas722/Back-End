import express from "express";
import ProductoUpdate from "../../controllers/ProductoControllers/ProductoUpdateController";
const router = express.Router();


router.put('/', ProductoUpdate);


export default router;