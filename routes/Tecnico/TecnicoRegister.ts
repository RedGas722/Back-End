import express from "express";
import TecnicoRegisterController from '../../controllers/TecnicoController/TecnicoRegisterController';
const router = express.Router();

// Route for registering an employee
router.post('/', TecnicoRegisterController);

export default router;