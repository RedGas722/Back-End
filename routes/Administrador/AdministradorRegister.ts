import express from "express";
import AdministradorRegisterController from '../../controllers/AdministradorControllers/AdministradorRegisterController';
const router = express.Router();


router.post('/', AdministradorRegisterController);


export default router;