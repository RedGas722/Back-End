import express from "express";
import ClienteLogin from '../../controllers/ClienteControllers/ClienteLoginController';
const router = express.Router();


router.post('/', ClienteLogin);


export default router;