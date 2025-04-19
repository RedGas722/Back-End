import express from "express";
import ClienteDelete from "../../controllers/ClienteControllers/ClienteDeleteController";
const router = express.Router();


router.delete('/', ClienteDelete);


export default router;