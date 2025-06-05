import express from "express";
import SeEncuentraDelete from "../../controllers/SeEncuentra/SeEncuentraDeleteController";
const router = express.Router();


router.delete('/', SeEncuentraDelete);


export default router;