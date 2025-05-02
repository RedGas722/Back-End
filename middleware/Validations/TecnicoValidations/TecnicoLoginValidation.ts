import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el inicio de sesión de un técnico
export const tecnicoLoginValidation: ValidationChain[] = [
    check('correo_tecnico')
      .isEmail()
      .withMessage('El campo "correo_tecnico" debe ser un correo válido.'),
    check('contraseña_tecnico')
      .isLength({ min: 8, max: 15 })
      .withMessage('El campo "contraseña_tecnico" debe tener entre 8 y 15 caracteres.')
  ];

  export function validateTecnicoLogin(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }