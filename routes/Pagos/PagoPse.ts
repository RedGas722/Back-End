import { Router } from 'express';
import { PagoPSE } from '../../controllers/PagosControllers/PagoPseController';
import verifyToken from "../../middleware/VerifyToken";

const router = Router();

router.post('/', verifyToken, PagoPSE);

export default router;
