import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para actualizar un categoria por correo
export const categoriaUpdateValidation: ValidationChain[] = [
    check('nuevo_nombre_categoria')
      .isString()
      .withMessage('El campo "new nombre categoria" debe ser de tipo texto correo válido.'),
    check('nombre_categoria')
      .isString()
      .withMessage('El campo "nombre categoria" debe ser de tipo texto válido.'),

  ];

  // Middleware para manejar errores de validación
export function validateCategoriaUpdate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }