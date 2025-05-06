import express from "express";
import FacturaUpdate from "../../controllers/FacturaControllers/FacturaUpdateController";

const router = express.Router();


router.put('/', FacturaUpdate);


export default router;