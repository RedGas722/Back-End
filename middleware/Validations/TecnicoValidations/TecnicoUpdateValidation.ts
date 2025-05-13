import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validaciones para la actualización de un técnico
export const tecnicoUpdateValidation: ValidationChain[] = [
     check('nuevo_correo_tecnico')
    .isEmail()
    .withMessage('El campo "nuevo_correo_tecnico" debe ser un correo válido si se proporciona.'),

  check('nombre_tecnico')
    .optional()
    .isLength({ min: 1, max: 255 })
    .withMessage('El campo "nombre_tecnico" debe tener entre 1 y 255 caracteres si se proporciona.'),

  check('correo_tecnico')
    .optional()
    .isEmail()
    .withMessage('El campo "correo_tecnico" debe ser un correo válido si se proporciona.'),

  check('telefono_tecnico')
    .optional()
    .isLength({ min: 10, max: 15 })
    .withMessage('El campo "telefono_tecnico" debe tener entre 10 y 15 caracteres si se proporciona.'),

  check('contrasena_tecnico')
    .optional()
    .isLength({ min: 8, max: 15 })
    .withMessage('El campo "contrasena_tecnico" debe tener entre 8 y 15 caracteres si se proporciona.'),

  check('imagen')
    .optional()
    .custom((value, { req }) => {
      if (req.file) {
        const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp'];
        if (!tiposPermitidos.includes(req.file.mimetype)) {
          throw new Error('Tipo de imagen no permitido. Solo JPG, PNG o WEBP.');
        }

        const maxSizeInBytes = 64 * 1024 * 1024; // 64KB
        if (req.file.size > maxSizeInBytes) {
          throw new Error('La imagen no debe superar los 64KB.');
        }
      }
      return true;
    })
];

export function validateTecnicoUpdate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}