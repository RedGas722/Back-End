import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el registro de un técnico
export const tecnicoRegisterValidation: ValidationChain[] = [
  check('nombre_tecnico')
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre_tecnico" es obligatorio y debe tener entre 1 y 255 caracteres.'),
  check('correo_tecnico')
    .isEmail()
    .withMessage('El campo "correo_tecnico" debe ser un correo válido.'),
  check('telefono_tecnico')
    .isLength({ min: 10, max: 15 })
    .withMessage('El campo "telefono_tecnico" debe tener entre 10 y 15 caracteres.'),
  check('contraseña_tecnico')
    .isLength({ min: 8, max: 15 })
    .withMessage('El campo "contraseña_tecnico" debe tener entre 8 y 15 caracteres.')
];

export function validateTecnicoRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }