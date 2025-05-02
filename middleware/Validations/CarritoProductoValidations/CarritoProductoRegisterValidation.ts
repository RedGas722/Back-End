import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el registro de un producto en el carrito
export const carritoProductoRegisterValidation: ValidationChain[] = [
  check('id_carrito')
    .isInt({ gt: 0 })
    .withMessage('El campo "id_carrito" debe ser un número entero positivo.'),
  check('id_producto')
    .isInt({ gt: 0 })
    .withMessage('El campo "id_producto" debe ser un número entero positivo.'),
  check('cantidad')
    .isInt({ gt: 0 })
    .withMessage('El campo "cantidad" debe ser un número entero positivo.')
];

// Middleware para manejar errores de validación
export function validateCarritoProductoRegister(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}