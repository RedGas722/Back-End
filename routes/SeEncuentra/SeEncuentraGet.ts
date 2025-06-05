import express from "express";
import SeEncuentraGet from "../../controllers/SeEncuentra/SeEncuentraGetController";
const router = express.Router();


router.get('/', SeEncuentraGet);


export default router;