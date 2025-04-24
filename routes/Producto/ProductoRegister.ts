import express from "express";
import ProductoRegister from "../../controllers/ProductoControllers/ProductoRegisterController";
const router = express.Router();


router.post('/', ProductoRegister);


export default router;