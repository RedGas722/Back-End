import db from '../config/config-db';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
import AuthTecnico from '../Dto/TecnicoDto/TecnicoAuthDto';
import bcrypt from 'bcryptjs';

class TecnicoRepository {

    static async add(tecnico: Tecnico) {
        const sql = `
            INSERT INTO tecnico 
            (nombre_tecnico, correo_tecnico, telefono_tecnico, contraseña_tecnico, imagen) 
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [
            tecnico.nombre_tecnico,
            tecnico.correo_tecnico,
            tecnico.telefono_tecnico,
            tecnico.contraseña_tecnico,
            tecnico.imagen
        ];

        return db.execute(sql, values);
    }

    static async login(auth: AuthTecnico) {
        const sql = 'SELECT id_tecnico, contraseña_tecnico FROM tecnico WHERE correo_tecnico=?';
        const values = [auth.correo_tecnico];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_tecnico, result[0][0].contraseña_tecnico);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_tecnico};
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}

export default TecnicoRepository;
