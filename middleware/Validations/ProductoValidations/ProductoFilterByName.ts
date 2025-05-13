import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para filtrar productos por nombre
export const productoFilterByNameValidation: ValidationChain[] = [
  check('nombre_producto')
    .isString()
    .withMessage('El campo "nombre producto" debe ser un texto.')
    .isLength({ min: 1 })
    .withMessage('El campo "nombre producto" no puede estar vacío.')
];

// Middleware para manejar errores de validación
export function validateProductoFilterByName(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}