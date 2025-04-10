import express from "express";
import TecnicoDelete from "../../controllers/TecnicoController/TecnicoDeleteController";
const router = express.Router();

router.delete('/', TecnicoDelete);

export default router;