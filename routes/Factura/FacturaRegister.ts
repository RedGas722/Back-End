import express from "express";
import FacturaRegister from "../../controllers/FacturaControllers/FacturaRegisterController";

const router = express.Router();


router.post('/', FacturaRegister);


export default router;