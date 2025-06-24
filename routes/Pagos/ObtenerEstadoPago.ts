import { Router } from 'express';
import { obtenerEstadoPago } from '../../controllers/PagosControllers/ObtenerEstadoPagoController';

const router = Router();

router.get('/:refPayco', obtenerEstadoPago);

export default router;
