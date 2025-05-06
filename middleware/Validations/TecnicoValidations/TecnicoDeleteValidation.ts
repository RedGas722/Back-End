import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para eliminar un técnico por correo
export const tecnicoDeleteValidation: ValidationChain[] = [
    check('correo_tecnico')
      .isEmail()
      .withMessage('El campo "correo_tecnico" debe ser un correo válido.')
  ];
  
  // Middleware para manejar errores de validación
  export function validateTecnicoDelete(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }