import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const CarritoServicioDeleteValidatorParams: ValidationChain[] = [
  check('id_carrito_servicio').isInt()
];

export function CarritoServicioDeleteValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}