import express, { Request, Response, NextFunction } from "express";
import ServicioDelete from "../../controllers/ServicioControllers/ServicioDeleteController";
import { ServicioDeleteValidator, ServicioDeleteValidatorParams } from "../../middleware/Validations/ServicioValidations/ServicioDeleteValidation";
const router = express.Router();


router.delete('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('Body recibido en ServicioDelete:', req.body);
  console.log('Query recibido en ServicioDelete:', req.query);
  next();
}, ServicioDeleteValidatorParams, ServicioDeleteValidator, ServicioDelete);


export default router;