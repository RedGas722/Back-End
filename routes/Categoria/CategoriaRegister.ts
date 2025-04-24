import express from "express";
import CategoriaRegister from "../../controllers/CategoriaControllers/CategoriaRegisterController";
const router = express.Router();


router.post('/', CategoriaRegister);


export default router;