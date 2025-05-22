import express from "express";
import SeEncuentraRegister from "../../controllers/SeEncuentra/SeEncuentraRegisterController";
const router = express.Router();


router.post('/', SeEncuentraRegister);


export default router;