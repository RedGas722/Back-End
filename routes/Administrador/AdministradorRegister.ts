import express from "express";
import AdministradorRegister from '../../controllers/AdministradorControllers/AdministradorRegisterController';
const router = express.Router();


router.post('/', AdministradorRegister);


export default router;