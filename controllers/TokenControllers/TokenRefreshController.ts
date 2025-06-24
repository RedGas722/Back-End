import { Request, Response } from 'express';
import { refreshTokenService } from '../../services/TokenRefreshServices';

export const renewTokenController = (req: Request, res: Response) => {
    try {
        const userData = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        };

        const newToken = refreshTokenService(userData);
        res.json({ token: newToken });
    } catch (error) {
        console.error('Error al renovar token:', error);
        res.status(500).json({ message: 'Error al renovar token' });
    }
};
