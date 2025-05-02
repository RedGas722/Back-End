
import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para obtener una factura por ID de cliente
export const facturaGetValidation: ValidationChain[] = [
  check('id_cliente')
    .isInt({ gt: 0 })
    .withMessage('El campo "id_cliente" debe ser un número entero positivo.')
];


export function validateFacturaGet(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }