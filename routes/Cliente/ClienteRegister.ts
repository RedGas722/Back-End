import express from "express";
import ClienteRegister from '../../controllers/ClienteControllers/ClienteRegisterController';
const router = express.Router();


router.post('/', ClienteRegister);


export default router;