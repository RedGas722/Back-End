import express from "express";
import AdministradorLogin from '../../controllers/AdministradorControllers/AdministradorLoginController';
const router = express.Router();



router.post('/', AdministradorLogin);


export default router;