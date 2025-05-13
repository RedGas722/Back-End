import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para registar un categoria por correo
export const categoriaRegisterValidation: ValidationChain[] = [
    check('nombre_categoria')
      .isLength({ min: 8, max: 15})
      .withMessage('El campo "nombre categoria" debe ser un correo válido.'),

  ];

  // Middleware para manejar errores de validación
export function validateCategoriaRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }