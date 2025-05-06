
import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para obtener un administrador por correo
export const administradorGetValidation: ValidationChain[] = [
    check('correo_administrador')
      .isEmail()
      .withMessage('El campo "correo_administrador" debe ser un correo válido.')
  ];
  
  // Middleware para manejar errores de validación
export function validateAdministradorGet(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }