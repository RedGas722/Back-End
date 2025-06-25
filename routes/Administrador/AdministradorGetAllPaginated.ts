import express from "express";
import AdministradorGetAllPaginated from "../../controllers/AdministradorControllers/AdministradorGetAllPaginatedController";

const router = express.Router();


router.get('/', AdministradorGetAllPaginated);


export default router;