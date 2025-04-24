import express from "express";
import AdministradorDelete from "../../controllers/AdministradorControllers/AdministradorDeleteController";
const router = express.Router();



router.delete('/', AdministradorDelete);


export default router;