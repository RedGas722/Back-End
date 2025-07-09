import db from '../config/config-db';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
import TecnicoNI from '../Dto/TecnicoDto/TecnicoNIDto';
import AuthTecnico from '../Dto/TecnicoDto/TecnicoAuthDto';
import bcrypt from 'bcryptjs';

class TecnicoRepository {

    // Insert Tecnico
    static async add(tecnico: Tecnico) {
        const sql = `
            INSERT INTO tecnico 
            (cc_tecnico, nombre_tecnico, correo_tecnico, telefono_tecnico, contraseña_tecnico, imagen) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            tecnico.cc_tecnico,
            tecnico.nombre_tecnico,
            tecnico.correo_tecnico,
            tecnico.telefono_tecnico,
            tecnico.contraseña_tecnico,
            tecnico.imagen
        ];
        return db.execute(sql, values);
    }

    // Update Tecnico
    static async update(tecnico: Tecnico, correo_tecnico: string) {
        const sql = 'UPDATE tecnico SET cc_tecnico = ?, nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ?, contraseña_tecnico = ? , imagen = ? WHERE correo_tecnico = ?';
        const values = [tecnico.cc_tecnico, tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, tecnico.imagen, correo_tecnico];
        return db.execute(sql, values);
    }


    // Update Tecnico sin contraseña (DataUpdate)
    static async DataUpdate(tecnico: Tecnico, correo_tecnico: string) {
        const sql = 'UPDATE tecnico SET cc_tecnico = ?, nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ?, imagen = ? WHERE correo_tecnico = ?';
        const values = [tecnico.cc_tecnico, tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, tecnico.imagen, correo_tecnico];
        return db.execute(sql, values);
    }

    // Update Tecnico sin Imagen (DataUpdateNI)
    static async DataUpdateNI(tecnico: TecnicoNI, correo_tecnico: string) {
        const sql = 'UPDATE tecnico SET cc_tecnico = ?, nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ? WHERE correo_tecnico = ?';
        const values = [tecnico.cc_tecnico, tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, correo_tecnico];
        return db.execute(sql, values);
    }

    // Delete Tecnico
    static async delete(correo_tecnico: string) {
        const sql = 'DELETE FROM tecnico WHERE correo_tecnico = ?';
        const values = [correo_tecnico];
        return db.execute(sql, values);
    }

    // Get Tecnico 

    static async getByEmail(correo_tecnico: string) {
        const sql = 'SELECT * FROM tecnico WHERE correo_tecnico = ?';
        const values = [correo_tecnico];
        const [rows] = await db.execute(sql, values);
        return rows;
    }

    static async getAll() {
        const sql = 'SELECT * FROM tecnico';
        const [rows] = await db.execute(sql);
        return rows;
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const safePage = parseInt(String(page), 10) || 1;
        const safeLimit = parseInt(String(limit), 10) || 10;
        const offset = (safePage - 1) * safeLimit;

        const sql = `
                SELECT * FROM tecnico
                ORDER BY id_tecnico DESC
                LIMIT ${safeLimit} OFFSET ${offset}
            `;

        const countSql = `SELECT COUNT(*) as total FROM tecnico`;

        const [rows] = await db.query(sql);
        const [countRows]: any = await db.execute(countSql);

        const totalItems = countRows[0].total;
        const totalPages = Math.ceil(totalItems / safeLimit);

        return {
            currentPage: safePage,
            totalPages,
            totalItems,
            itemsPerPage: safeLimit,
            data: rows,
        };
    }

    static async getAllEmails() {
        const sql = 'SELECT id_tecnico, correo_tecnico FROM tecnico';
        const [rows]: any = await db.execute(sql);
        return rows;
    }

    // Get Tecnico
    static async login(auth: AuthTecnico) {
        const sql = 'SELECT * FROM tecnico WHERE correo_tecnico=?';
        const values = [auth.correo_tecnico];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_tecnico, result[0][0].contraseña_tecnico);
            if (isPasswordValid) {
                return {
                    logged: true,
                    status: "Successful authentication",
                    id: result[0][0].id_tecnico,
                    cc: result[0][0].cc_tecnico,
                    name: result[0][0].nombre_tecnico,
                    email: result[0][0].correo_tecnico,
                    telefono: result[0][0].telefono_tecnico,
                    tipo_usuario: result[0][0].tipo_usuario,
                };
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }

    static async email(correo_tecnico: string) {
        const sql = 'SELECT * FROM tecnico WHERE correo_tecnico=?';
        const values = [correo_tecnico];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            return {
                logged: true,
                status: "Successful authentication",
                id: result[0][0].id_tecnico,
                name: result[0][0].nombre_tecnico,
                email: result[0][0].correo_tecnico,
                tipo_usuario: result[0][0].tipo_usuario
            };
        }
        return { logged: false, status: "Invalid email" };
    }

    static async changePassword(id_tecnico: number, contraseña_tecnico: string) {
        const sql = 'UPDATE tecnico SET contraseña_tecnico = ? WHERE id_tecnico = ?';
        const values = [contraseña_tecnico, id_tecnico];
        return db.execute(sql, values);
    }

}


export default TecnicoRepository;
