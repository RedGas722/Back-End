import express from "express";
import SeEncuentraUpdate from "../../controllers/SeEncuentra/SeEncuentraUpdateController";
const router = express.Router();


router.put('/', SeEncuentraUpdate);


export default router;