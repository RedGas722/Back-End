import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el registro de un administrador
export const categoriaUpdateValidation: ValidationChain[] = [
  check('new_nombre_categoria')
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nuevo nombre categoria" es obligatorio y debe tener entre 1 y 255 caracteres.'),
  check('nombre_categoria')
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre categoria" es obligatorio y debe tener entre 1 y 255 caracteres.'),
];


// Middleware para manejar errores de validación
export function validateCategoriaUpdate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }