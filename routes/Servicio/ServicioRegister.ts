import express from "express";
import ServicioRegister from "../../controllers/ServicioControllers/ServicioRegisterController";
const router = express.Router();


router.post('/', ServicioRegister);


export default router;