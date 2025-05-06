import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el registro de un administrador
export const categoriaRegisterValidation: ValidationChain[] = [
  check('nombre_categoria')
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre categoria" es obligatorio y debe tener entre 1 y 255 caracteres.'),
];


// Middleware para manejar errores de validación
export function validateCategoriaRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }