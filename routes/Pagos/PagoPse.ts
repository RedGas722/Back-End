import { Router } from 'express';
import { generarPagoPSE } from '../../controllers/PagosControllers/PagoPseController';
import verifyToken from "../../middleware/VerifyToken";

const router = Router();

router.post('/', verifyToken, generarPagoPSE);

export default router;
