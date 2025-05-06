import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const clienteEmailValidatorParams: ValidationChain[] = [
   check('correo_cliente')
      .isEmail()
      .isLength({ min: 8, max: 15 })
];

export function ClienteEmailValidator(req: Request, res: Response, next: NextFunction) {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
   }
   next();
}