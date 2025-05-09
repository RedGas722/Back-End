import express from "express";
import ProductoRegister from "../../controllers/ProductoControllers/ProductoRegisterController";
import { ProductoRegisterValidator, ProductoRegisterValidatorParams } from "../../middleware/Validations/ProductoValidations/ProductoRegisterValidation";
import { upload } from "../../middleware/multer"; // importa tu multer personalizado

const router = express.Router();

router.post('/', upload.single('imagen'), ProductoRegisterValidatorParams, ProductoRegisterValidator, ProductoRegister);

export default router;
