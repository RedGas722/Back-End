import express from "express";
import AdministradorUpdate from '../../controllers/AdministradorControllers/AdministradorUpdateController';
const router = express.Router();


router.put('/', AdministradorUpdate);


export default router;
