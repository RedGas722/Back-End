import express from "express";
import FacturaGetAll from "../../controllers/FacturaControllers/FacturaGetAll";

const router = express.Router();

router.get('/', FacturaGetAll);

export default router;