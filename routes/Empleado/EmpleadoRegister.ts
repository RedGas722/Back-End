import express from "express";
import register from '../../controllers/EmpleadoController/EmpleadoRegisterController';
const router = express.Router();

// Route for registering an employee
router.post('/', register);

export default router;cc