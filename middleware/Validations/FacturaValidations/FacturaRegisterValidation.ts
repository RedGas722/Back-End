import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para registrar una factura
export const facturaRegisterValidation: ValidationChain[] = [
  check('id_cliente')
    .isInt({ gt: 0 })
    .withMessage('El campo "id_cliente" debe ser un número entero positivo.'),
  check('monto')
    .isFloat({ gt: 0 })
    .withMessage('El campo "monto" debe ser un número mayor a 0.'),
  check('fecha')
    .isISO8601()
    .withMessage('El campo "fecha" debe ser una fecha válida en formato ISO 8601.')
];


export function validateFacturaRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }