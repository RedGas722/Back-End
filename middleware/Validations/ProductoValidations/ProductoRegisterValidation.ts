import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const ProductoRegisterValidatorParams: ValidationChain[] = [
  check('nombre_producto')
    .isString().withMessage('El nombre debe ser una cadena.')
    .isLength({ min: 1, max: 100 }).withMessage('El nombre debe tener entre 1 y 100 caracteres.'),
  
  check('precio_producto')
    .isDecimal().withMessage('El precio debe ser un número decimal.'),

  check('descripcion_producto')
    .isString().withMessage('La descripción debe ser una cadena.'),

  check('stock')
    .isInt({ gt: 0 }).withMessage('El stock debe ser un número entero mayor que 0.'),

  check('descuento')
  .optional()
  .isInt({ min: 0, max: 100 }).withMessage('El descuento debe ser un número entero entre 0 y 100.'),

  check('fecha_descuento')
    .optional()
    .isDate().withMessage('La fecha de descuento debe ser una fecha válida.'),

    check('imagen')
    .custom((value, { req }) => {
      if (!req.file) {
        throw new Error('La imagen es obligatoria.');
      }
  
      const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp'];
      if (!tiposPermitidos.includes(req.file.mimetype)) {
        throw new Error('Tipo de imagen no permitido. Solo JPG, PNG o WEBP.');
      }
  
      const maxSizeInBytes = 8 * 1024 * 1024 ; 
      if (req.file.size > maxSizeInBytes) {
        throw new Error('La imagen no debe superar los 64KB.');
      }
  
      return true;
    })
];

export function ProductoRegisterValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}
