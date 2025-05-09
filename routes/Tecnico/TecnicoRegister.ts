import express from "express";
import TecnicoRegister from '../../controllers/TecnicoController/TecnicoRegisterController';
import { tecnicoRegisterValidation, validateTecnicoRegister } from "../../middleware/Validations/TecnicoValidations/TecnicoRegisterValidation";
import { upload } from "../../middleware/multer";
const router = express.Router();

router.post('/', upload.single('imagen'), tecnicoRegisterValidation, validateTecnicoRegister , TecnicoRegister);

export default router;