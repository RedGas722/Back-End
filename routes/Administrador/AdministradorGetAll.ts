import express from "express";
import AdministradorGetAll from '../../controllers/AdministradorControllers/AdministradorGetAllController';

const router = express.Router();

router.get('/', AdministradorGetAll);

export default router;
