import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para la actualización de un administrador
export const administradorUpdateValidation: ValidationChain[] = [
  check('nombre_admin')
    .optional()
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre_administrador" debe tener entre 1 y 255 caracteres si se proporciona.'),

  check('correo_admin')
    .optional()
    .isEmail()
    .withMessage('El campo "correo_administrador" debe ser un correo válido si se proporciona.'),

  check('telefono_admini')
    .optional()
    .isLength({ min: 10, max: 15 })
    .withMessage('El campo "telefono_administrador" debe tener entre 10 y 15 caracteres si se proporciona.'),

  check('contrasena_admin')
    .optional()
    .isLength({ min: 8, max: 15 })
    .withMessage('El campo "contrasena_administrador" debe tener entre 8 y 15 caracteres si se proporciona.')
];

export function validateAdministradorUpdate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}