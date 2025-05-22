import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const ContratoUpdateValidatorParams: ValidationChain[] = [
  check('id_contrato').isInt({gt: 0}),
  check('fecha_contrato').isDate(),
  check('duracion_contrato').isString(),
  check('tipo_contrato').isString(),
  check('salario').isDecimal().isLength({ min: 1, max: 15 }),
  check('id_admin').isInt(),
  check('id_empleado').isInt()
];

export function ContratoUpdateValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}