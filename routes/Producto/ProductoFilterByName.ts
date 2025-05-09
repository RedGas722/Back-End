import express from 'express';
import ProductoFilterByName from '../../controllers/ProductoControllers/ProductoFilterByNameController';
import { productoFilterByNameValidation, validateProductoFilterByName } from '../../middleware/Validations/ProductoValidations/ProductoFilterByName'

const router = express.Router();

router.get('/', productoFilterByNameValidation, validateProductoFilterByName, ProductoFilterByName);


export default router;