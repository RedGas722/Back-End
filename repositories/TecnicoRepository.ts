import db from '../config/config-db';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
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
    static async update(tecnico: Tecnico) {
        const sql = 'UPDATE tecnico SET nombre_tecnico = ?, correo_tecnico = ?, telefono_tecnico = ?, contraseña_tecnico = ? WHERE correo_tecnico = ?';
        const values = [tecnico.nombre_tecnico, tecnico.correo_tecnico, tecnico.telefono_tecnico, tecnico.contraseña_tecnico, tecnico.correo_tecnico];
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
            console.log(rows); 
            return rows; 
        }

        static async getAll() {
            const sql = 'SELECT * FROM tecnico';
            return db.execute(sql);
        }

    // Get Tecnico
    static async login(auth: AuthTecnico) {
        const sql = 'SELECT * FROM tecnico WHERE correo_tecnico=?';
        const values = [auth.correo_tecnico];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_tecnico, result[0][0].contraseña_tecnico);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_tecnico, name: result[0][0].nombre_tecnico, email: result[0][0].correo_tecnico, telefono: result[0][0].telefono_tecnico};
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}


export default TecnicoRepository;
