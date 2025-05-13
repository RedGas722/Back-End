import express from "express";
import TecnicoUpdate from '../../controllers/TecnicoController/TecnicoUpdateController';
import { upload } from "../../middleware/multer";
import { tecnicoUpdateValidation,validateTecnicoUpdate } from "../../middleware/Validations/TecnicoValidations/TecnicoUpdateValidation";

const router = express.Router();

router.put('/', upload.single('imagen'), tecnicoUpdateValidation, validateTecnicoUpdate, TecnicoUpdate);

export default router;