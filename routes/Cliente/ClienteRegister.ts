import express from "express";
import ClienteRegisterController from '../../controllers/ClienteControllers/ClienteRegisterController';
const router = express.Router();


router.post('/', ClienteRegisterController);


export default router;