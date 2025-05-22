import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para eliminar un administrador por correo
export const categoriaDeleteValidation: ValidationChain[] = [
   check('nombre_categoria')
    .isString()
    .withMessage('El campo "nombre categoria" debe ser tipo texto válido.'),

];

// Middleware para manejar errores de validación
export function validateCategoriaDelete(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}