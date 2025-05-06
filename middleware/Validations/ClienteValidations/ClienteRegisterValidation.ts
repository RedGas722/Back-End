import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const ClienteRegisterValidatorParams: ValidationChain[] = [
  check('nombre_cliente').isString(),
  check('correo_cliente').isEmail(),
  check('telefono_cliente').isString().isLength({ min: 10, max: 10 }),
  check('direccion_cliente').isString(),
  check('contraseña_cliente').isLength({ min: 8, max: 15 })
];

export function ClienteRegisterValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}