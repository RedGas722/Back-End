import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el inicio de sesión de un administrador
export const administradorLoginValidation: ValidationChain[] = [
    check('correo_administrador')
      .isEmail()
      .withMessage('El campo "correo_administrador" debe ser un correo válido.'),
    check('contraseña_administrador')
      .isLength({ min: 8, max: 15 })
      .withMessage('El campo "contraseña_administrador" debe tener entre 8 y 15 caracteres.')
  ];

  // Middleware para manejar errores de validación
export function validateAdministradorLogin(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }