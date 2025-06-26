import express from "express";
import ClienteDataUpdate from "../../controllers/ClienteControllers/ClienteDataUpdateController";
const router = express.Router();


router.put('/', ClienteDataUpdate);


export default router;