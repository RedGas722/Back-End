import express from "express";
import ContratoGetAllPaginated from "../../controllers/ContratoControllers/ContratoGetAllPaginatedController";
const router = express.Router();

router.get('/', ContratoGetAllPaginated);

export default router;