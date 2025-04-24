import express from "express";
import ServicioDelete from "../../controllers/ServicioControllers/ServicioDeleteController";
const router = express.Router();


router.delete('/', ServicioDelete);


export default router;