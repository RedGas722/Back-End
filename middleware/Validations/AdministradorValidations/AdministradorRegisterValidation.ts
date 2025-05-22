import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el registro de un administrador
export const administradorRegisterValidation: ValidationChain[] = [
  check('nombre_admin')
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre_administrador" es obligatorio y debe tener entre 1 y 255 caracteres.'),
  check('correo_admin')
    .isEmail()
    .withMessage('El campo "correo_administrador" debe ser un correo válido.'),
  check('telefono_admin')
    .isLength({ min: 9, max: 15 })
    .withMessage('El campo "telefono_administrador" debe tener entre 10 y 15 caracteres.'),
  check('contraseña_admin')
    .isLength({ min: 8, max: 15 })
    .withMessage('El campo "contraseña_administrador" debe tener entre 8 y 15 caracteres.')
];


// Middleware para manejar errores de validación
export function validateAdministradorRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }