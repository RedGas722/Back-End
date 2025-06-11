import { Router } from 'express';
import { confirmarPagoPSE } from '../../controllers/PagosControllers/ConfirmacionPagoController';

const router = Router();

router.post('/', confirmarPagoPSE);

export default router;
