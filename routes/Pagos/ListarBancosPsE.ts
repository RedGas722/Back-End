import { Router } from 'express';
import { listarBancosPSE } from '../../controllers/PagosControllers/ListarBancosPseController';

const router = Router();

router.get('/', listarBancosPSE);

export default router;
