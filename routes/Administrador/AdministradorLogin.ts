import express from "express";
import AdministradorLoginController from '../../controllers/AdministradorControllers/AdministradorLoginController';
const router = express.Router();



router.post('/', AdministradorLoginController);


export default router;