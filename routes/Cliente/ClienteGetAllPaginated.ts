import express from "express";
import ClienteGetAllPaginated from "../../controllers/ClienteControllers/ClienteGetAllPaginatedController";

const router = express.Router();


router.get('/', ClienteGetAllPaginated);


export default router;