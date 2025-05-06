import express from "express";
import ServicioUpdate from "../../controllers/ServicioControllers/ServicioUpdateController";
const router = express.Router();


router.put('/', ServicioUpdate);


export default router;