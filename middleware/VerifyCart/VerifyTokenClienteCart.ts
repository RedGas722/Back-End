import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface ClientePayload {
  nombre_cliente: string;
  correo_cliente: string;
  telefono_cliente: string;
  direccion_cliente: string;
}

declare global {
  namespace Express {
    interface Request {
      cliente?: ClientePayload; 
    }
  }
}

export const verifyTokenCliente = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });
  }

  try {
    const secretKey = process.env.JWT_SECRET || 'llavesecretas'; 

    const decoded = jwt.verify(token, secretKey) as ClientePayload;

    req.cliente = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};
