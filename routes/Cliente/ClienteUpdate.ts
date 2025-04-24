import express from "express";
import ClienteUpdate from "../../controllers/ClienteControllers/ClienteUpdateController";
const router = express.Router();


router.put('/', ClienteUpdate);


export default router;