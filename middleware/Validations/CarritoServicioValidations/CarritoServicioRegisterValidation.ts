import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const CarritoServicioRegisterValidatorParams: ValidationChain[] = [
  check('id_carrito').isInt(),
  check('id_servicio').isInt()
];

export function CarritoServicioRegisterValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}