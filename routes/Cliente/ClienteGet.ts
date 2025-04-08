import express from "express";
import ClienteGet from "../../controllers/ClienteControllers/ClienteGetController";
const router = express.Router();


router.get('/', ClienteGet);


export default router;