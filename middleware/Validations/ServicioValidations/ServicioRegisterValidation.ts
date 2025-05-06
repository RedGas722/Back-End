import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const ServicioRegisterValidatorParams: ValidationChain[] = [
  check('nombre_servicio').isString(),
  check('descripcion_servicio').isString(),
  check('precio_servicio').isDecimal().isLength({ min: 1, max: 15 })
];

export function ServicioRegisterValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array()});
  }
  next();
}