import express from "express";
import ContratoRegister from "../../controllers/ContratoControllers/ContratoRegisterController";
import { ContratoRegisterValidator, ContratoRegisterValidatorParams } from "../../middleware/Validations/ContratoValidations/ContratoRegisterValidation";
const router = express.Router();
console.log('Ruta de registro de contrato inicializada');


// router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.log('Body recibido en ContratoRegister:', req.body);
//   next();
// }, ContratoRegisterValidatorParams, ContratoRegisterValidator, ContratoRegister);

router.post('/', ContratoRegisterValidatorParams, ContratoRegisterValidator, ContratoRegister);


export default router;