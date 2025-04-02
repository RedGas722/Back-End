import Administrador from '../Dto/AdministradorDto/AdministradorDto';
import AuthAdministrador from '../Dto/AdministradorDto/AdministradorAuthDto';
import db from '../config/config-db';
import bcrypt from 'bcryptjs';

class AdministradorRepository {

    // Insert Administrador
    static async add(administrador: Administrador) {
        const sql = 'INSERT INTO Administrador (nombre_admin, correo_admin, telefono_admin, contraseña_admin) VALUES (?, ?, ?, ?)';
        const values = [administrador.nombre_admin, administrador.correo_admin, administrador.telefono_admin, administrador.contraseña_admin];
        return db.execute(sql, values);
    }

    // Get Administrador

    static async getAll() {
        const sql = 'SELECT * FROM administrador';
        return db.execute(sql);
    }

    static async getByEmail(correo_admin: string) {
        const sql = 'SELECT * FROM administrador WHERE correo_admin = ?';
        const values = [correo_admin];
        return db.execute(sql, values);
    }

    // Update Administrador

    static async update(administrador: Administrador) {
        const sql = 'UPDATE administrador SET nombre_admin = ?, correo_admin = ?, telefono_admin = ?, contraseña_admin = ? WHERE correo_admin = ?';
        const values = [administrador.nombre_admin, administrador.correo_admin, administrador.telefono_admin, administrador.contraseña_admin,];
        return db.execute(sql, values);
    }
    // Delete Administrador

    static async delete(correo_admin: string) {
        const sql = 'DELETE FROM administrador WHERE correo_admin = ?';
        const values = [correo_admin];
        return db.execute(sql, values);
    }

    // login

    static async login(auth: AuthAdministrador) {
        const sql = 'SELECT id_admin, contraseña_admin FROM administrador WHERE correo_admin=?';
        const values = [auth.correo_admin];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_admin, result[0][0].contraseña_admin);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_admin };
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}

export default AdministradorRepository;