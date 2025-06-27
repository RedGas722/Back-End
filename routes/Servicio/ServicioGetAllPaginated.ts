import express from "express";
import ServicioGetAllPaginated from "../../controllers/ServicioControllers/ServicioGetAllPaginatedController";

const router = express.Router();


router.get('/', ServicioGetAllPaginated);


export default router;