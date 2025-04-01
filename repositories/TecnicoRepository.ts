import db from '../config/config-db';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
import AuthTecnico from '../Dto/TecnicoDto/authTecnicoDto';
import bcrypt from 'bcryptjs';

class TecnicoRepository {

    static async add(Tecnico: Tecnico) {
        const sql = `
            INSERT INTO tecnico 
            (nombre_tecnico, correo, telefono, contraseña_tecnico) 
            VALUES (?, ?, ?, ?)
        `;
        const values = [
            Tecnico.nombre_tecnico,
            Tecnico.correo,
            Tecnico.telefono,
            Tecnico.contraseña_tecnico
        ];

        return db.execute(sql, values);
    }

    static async login(AuthTecnico: AuthTecnico) {
        const sql = 'SELECT id_tecnico, contraseña_tecnico FROM tecnico WHERE correo=?';
        const values = [AuthTecnico.correo];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(AuthTecnico.contraseña_tecnico, result[0][0].contraseña_tecnico);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_tecnico };
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}

export default TecnicoRepository;
