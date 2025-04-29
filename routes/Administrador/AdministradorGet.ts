import express from "express";
import AdministradorGet from "../../controllers/AdministradorControllers/AdministradorGetController";
const router = express.Router();



router.get('/', AdministradorGet);


export default router;