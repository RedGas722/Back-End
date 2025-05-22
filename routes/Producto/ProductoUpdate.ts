import express from "express";
import ProductoUpdate from "../../controllers/ProductoControllers/ProductoUpdateController";
import { ProductoUpdateValidator, ProductoUpdateValidatorParams } from "../../middleware/Validations/ProductoValidations/ProductoUpdateValidator";
import { upload } from "../../middleware/multer";
const router = express.Router();


router.put('/', upload.single('imagen'), ProductoUpdateValidatorParams, ProductoUpdateValidator, ProductoUpdate);


export default router;