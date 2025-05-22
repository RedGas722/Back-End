import db from '../../../config/config-db';  // Asegúrate de que tu archivo de conexión mysql2 esté bien configurado
import { Request, Response, NextFunction } from 'express';

export async function validateFacturaEntitiesExist(req: Request, res: Response, next: NextFunction) {
  const { id_cliente, id_empleado } = req.body;

  try {
    // Verifica si el cliente existe
    const [clientes]: any = await db.query('SELECT * FROM cliente WHERE id_cliente = ?', [id_cliente]);

    if (clientes.length === 0) {
    return res.status(404).json({ errors: [{ msg: 'Cliente no encontrado con ese ID.' }] });
    }

    // Verifica si el empleado existe
    const [empleados]: any = await db.query('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);

    if (empleados.length === 0) {
    return res.status(404).json({ errors: [{ msg: 'Empleado no encontrado con ese ID.' }] });
    }

    // Si ambos existen, continúa con el siguiente middleware
    next();
  } catch (error) {
    console.error('Error al validar entidades:', error);
    return res.status(500).json({ errors: [{ msg: 'Error al validar existencia de cliente o empleado.' }] });
  }
}
