import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const ProductoUpdateValidatorParams: ValidationChain[] = [
  check('nuevo_nombre_producto').isString(),
  check('precio_producto').isDecimal().isLength({ min: 1, max: 15 }),
  check('descripcion_producto').isString(),
  check('stock').isInt({ gt: 0 }).isLength({ min: 1, max: 15 }),
  check('descuento')
  .optional()
  .isInt({ min: 0, max: 100 }).withMessage('El descuento debe ser un número entero entre 0 y 100.'),

  check('fecha_descuento')
  .optional()
  .isDate().withMessage('La fecha de descuento debe ser una fecha válida.'),

  check('nombre_producto').isString(),
  check('imagen')
    .custom((value, { req }) => {
      if (!req.file) {
        throw new Error('La imagen es obligatoria.');
      }

      const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp'];
      if (!tiposPermitidos.includes(req.file.mimetype)) {
        throw new Error('Tipo de imagen no permitido. Solo JPG, PNG o WEBP.');
      }

      return true;
    }),
];

export function ProductoUpdateValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}