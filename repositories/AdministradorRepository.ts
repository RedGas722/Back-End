import Administrador from '../Dto/AdministradorDto/AdministradorDto';
import AdministradorDataDto from '../Dto/AdministradorDto/AdministradorDataDto';
import AuthAdministrador from '../Dto/AdministradorDto/AdministradorAuthDto';
import db from '../config/config-db';
import bcrypt from 'bcryptjs';

class AdministradorRepository {

    // Insert Administrador
    static async add(administrador: Administrador) {
        const sql = 'INSERT INTO administrador (nombre_admin, correo_admin, telefono_admin, contraseña_admin) VALUES (?, ?, ?, ?)';
        const values = [administrador.nombre_admin, administrador.correo_admin, administrador.telefono_admin, administrador.contraseña_admin];
        return db.execute(sql, values);
    }

    // Get Administrador
    static async getAll() {
        const sql = 'SELECT * FROM administrador';
        const [rows] = await db.execute(sql);
        return rows;
    }

    static async getByEmail(correo_admin: string) {
        const sql = 'SELECT * FROM administrador WHERE correo_admin = ?';
        const values = [correo_admin];
        const [rows]:any = await db.execute(sql, values);
        return rows[0]; 
    }

    // Update Administrador
    static async update(administrador: Administrador, new_correo_admin: string) {
        const sql = 'UPDATE administrador SET nombre_admin = ?, correo_admin = ?, telefono_admin = ?, contraseña_admin = ? WHERE correo_admin = ?';
        const values = [administrador.nombre_admin, new_correo_admin, administrador.telefono_admin, administrador.contraseña_admin, administrador.correo_admin];
        return db.execute(sql, values);
    }

    // Update Administrador sin contraseña (DataUpdate)
    static async DataUpdate(administrador: Administrador, correo_admin: string) {
        const sql = 'UPDATE administrador SET nombre_admin = ?, correo_admin = ?, telefono_admin = ? WHERE correo_admin = ?';
        const values = [administrador.nombre_admin, administrador.correo_admin, administrador.telefono_admin, correo_admin];
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
        const sql = 'SELECT * FROM administrador WHERE correo_admin=?';
        const values = [auth.correo_admin];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_admin, result[0][0].contraseña_admin);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_admin, name: result[0][0].nombre_admin, email: result[0][0].correo_admin, telefono: result[0][0].telefono_admin};
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }

    // Data Update sin contraseña
 static async AdministradorDataUpdate(administrador: AdministradorDataDto, correo_admin: string) {
        const sql = 'UPDATE administrador SET nombre_admin = ?, correo_admin = ?, telefono_admin = ? WHERE correo_admin = ?';
        const values = [administrador.nombre_admin, administrador.correo_admin, administrador.telefono_admin, correo_admin];
        return db.execute(sql, values);
    }
}

export default AdministradorRepository;