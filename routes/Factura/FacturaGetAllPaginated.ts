import express from "express";
import FacturaGetAllPaginated from "../../controllers/FacturaControllers/FacturaGetAllPaginatedController";

const router = express.Router();

router.get('/', FacturaGetAllPaginated);

export default router;