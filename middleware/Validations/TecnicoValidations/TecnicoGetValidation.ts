import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para obtener un técnico por correo
export const tecnicoGetValidation: ValidationChain[] = [
    check('correo_tecnico')
      .isEmail()
      .withMessage('El campo "correo_tecnico" debe ser un correo válido.')
  ];

  export function validateTecnicoGet(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }