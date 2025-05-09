import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para filtrar categorías por nombre
export const categoriaFilterByNameValidation: ValidationChain[] = [
  check('nombre_categoria')
    .isString()
    .withMessage('El campo "nombre_categoria" debe ser un texto.')
    .isLength({ min: 1 })
    .withMessage('El campo "nombre_categoria" no puede estar vacío.')
];

// Middleware para manejar errores de validación
export function validateCategoriaFilterByName(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}