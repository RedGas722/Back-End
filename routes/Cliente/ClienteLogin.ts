import express from "express";
import ClienteLoginController from '../../controllers/ClienteControllers/ClienteLoginController';
const router = express.Router();


router.post('/', ClienteLoginController);


export default router;