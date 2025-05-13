import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para actualizar un categoria por correo
export const categoriaUpdateValidation: ValidationChain[] = [
    check('new_nombre_categoria')
      .isLength({ min: 8, max: 15 })
      .withMessage('El campo "new nombre categoria" debe ser un correo válido.'),
    check('nombre_categoria')
      .isLength({ min: 8, max: 15})
      .withMessage('El campo "nombre categoria" debe ser un correo válido.'),

  ];

  // Middleware para manejar errores de validación
export function validateCategoriaUpdate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }