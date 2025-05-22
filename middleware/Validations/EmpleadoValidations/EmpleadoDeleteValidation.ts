import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

// Validaciones para eliminar un empleado por ID
export const empleadoDeleteValidation: ValidationChain[] = [
    check('correo_empleado')
      .isEmail()
  ];
  
  export function validateEmpleadoDelete(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }