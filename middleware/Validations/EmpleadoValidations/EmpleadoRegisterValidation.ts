import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const empleadoRegisterValidation: ValidationChain[] = [
  check('cc_empleado')
    .isLength({ min:1, max: 15})
    .withMessage('La cedula debe tener entre 1 y 15 caracteres'),

  check('nombre_empleado')
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre_empleado" es obligatorio y debe tener entre 1 y 255 caracteres.'),
  check('correo_empleado')
    .isEmail()
    .withMessage('El campo "correo_empleado" debe ser un correo válido.'),
  check('telefono_empleado')
    .isLength({ min: 10, max: 10 })
    .withMessage('El campo "telefono_empleado" debe 10 caracteres.'),
  check('direccion_empleado')
    .optional()  
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "direccion_empleado" es obligatorio y debe tener entre 1 y 255 caracteres.'),
  check('contraseña_empleado')
    .isLength({ min: 8, max: 15 })
    .withMessage('El campo "contraseña_empleado" debe tener entre 8 y 15 caracteres.')

];

export function validateEmpleadoRegister(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}