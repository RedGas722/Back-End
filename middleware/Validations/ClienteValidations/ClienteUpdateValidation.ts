import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const ClienteUpdateValidatorParams: ValidationChain[] = [
  check('nombre_cliente').isString().optional(),
  check('nuevo_correo_cliente').isEmail().optional(),
  check('telefono_cliente').isString().isLength({ min: 10, max: 10 }).optional(),
  check('direccion_cliente').isString().optional(),
  check('contraseña_cliente').isLength({ min: 8, max: 15 }).optional(),
  check('correo_cliente').isEmail()
];

export function ClienteUpdateValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}