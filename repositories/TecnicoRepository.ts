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

    // Update Tecnico
    static async update(tecnico: Tecnico, correo_tecnico: string) {
        const sql = 'UPDATE tecnico SET nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ?, contraseña_tecnico = ? , imagen = ? WHERE correo_tecnico = ?';
        const values = [tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, tecnico.imagen, correo_tecnico];
        return db.execute(sql, values);
    }

    
    // Update Tecnico sin contraseña (DataUpdate)
    static async DataUpdate(tecnico: Tecnico, correo_tecnico: string) {
        const sql = 'UPDATE tecnico SET nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ?, imagen = ? WHERE correo_tecnico = ?';
        const values = [tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, tecnico.imagen, correo_tecnico];
        return db.execute(sql, values);
    }

    // Update Tecnico sin Imagen (DataUpdateNI)
    static async DataUpdateNI(tecnico: TecnicoNI, correo_tecnico: string) {
        const sql = 'UPDATE tecnico SET nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ? WHERE correo_tecnico = ?';
        const values = [tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, correo_tecnico];
        return db.execute(sql, values);
    }

    // Delete Tecnico
    static async delete(correo_tecnico: string) {
        const sql = 'DELETE FROM tecnico WHERE correo_tecnico = ?';
        const values = [correo_tecnico];
        return db.execute(sql, values);
    }

    // Get Tecnico 

        static async getByEmail(correo_tecnico: string){
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
                    name: result[0][0].nombre_tecnico,
                    email: result[0][0].correo_tecnico,
                    telefono: result[0][0].telefono_tecnico,
                    tipo_usuario: "tecnico" // <-- aquí se indica el tipo de usuario
                };
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}


export default TecnicoRepository;
