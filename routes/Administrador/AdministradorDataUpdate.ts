import express from "express";
import AdministradorDataUpdate from '../../controllers/AdministradorControllers/AdministradorDataUpdateController';
const router = express.Router();


router.put('/', (req, res, next) => {
  console.log('Body recibido:', req.body);
  next();
}, AdministradorDataUpdate);


export default router;
