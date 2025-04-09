import express from "express";
import AdministradorUpdate from '../../controllers/AdministradorControllers/AdministradorUpdateController';
const router = express.Router();


router.post('/', AdministradorUpdate);


export default router;
