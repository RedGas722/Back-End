import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para el inicio de sesión de un empleado
export const empleadoLoginValidation: ValidationChain[] = [
  check('correo_empleado')
    .isEmail()
    .withMessage('El campo "correo_empleado" debe ser un correo válido.'),
  check('contraseña_empleado')
    .isLength({ min: 8, max: 15 })
    .withMessage('El campo "contraseña_empleado" debe tener entre 8 y 15 caracteres.')
];

// Middleware para manejar errores de validación
export function validateEmpleadoLogin(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}