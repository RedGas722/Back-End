import db from '../config/config-db';
import Empleado from '../Dto/EmpleadoDto/EmpleadoDto';
import AuthEmpleado from '../Dto/EmpleadoDto/EmpleadoAuthDto';
import bcrypt from 'bcryptjs';
import DataEmpleado from '../Dto/EmpleadoDto/DataEmpleadoDto';

class EmpleadoRepository {

    // Insert Empleado
    static async add(empleado: Empleado) {
        const sql = `
            INSERT INTO empleado 
            (cc_empleado, nombre_empleado, correo_empleado, telefono_empleado, direccion_empleado, contraseña_empleado) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            empleado.cc_empleado,
            empleado.nombre_empleado,
            empleado.correo_empleado,
            empleado.telefono_empleado,
            empleado.direccion_empleado,
            empleado.contraseña_empleado
        ];

            return db.execute(sql,values);
    }

        //Get Empleado 

        static async getByCorreo(correo_empleado: string) {
            const sql = 'SELECT * FROM empleado WHERE correo_empleado = ?';
            const values = [correo_empleado];
            const [rows]:any = await db.execute(sql, values);
            return rows[0];
        }

        static async ClienteGetAll(){
            const [rows] = await db.query('SELECT * FROM empleado');
            return rows;
        }

    // Update Empleado
    static async update(empleado: Empleado, correo_empleado: string) {
        const sql = 'UPDATE empleado SET cc_empleado = ?, nombre_empleado = ?, correo_empleado = ?, telefono_empleado = ?, direccion_empleado = ?, contraseña_empleado = ? WHERE correo_empleado = ?';
        const values = [empleado.cc_empleado, empleado.nombre_empleado, empleado.correo_empleado, empleado.telefono_empleado, empleado.direccion_empleado, empleado.contraseña_empleado, correo_empleado];
        return db.execute(sql, values);
    }

    static async dataUpdate(dataEmpleado: DataEmpleado, correo_empleado: string) {
        const sql = 'UPDATE empleado SET cc_empleado = ?, nombre_empleado = ?, correo_empleado = ?, telefono_empleado = ?, direccion_empleado = ? WHERE correo_empleado = ?';
        const values = [dataEmpleado.cc_empleado, dataEmpleado.nombre_empleado, dataEmpleado.correo_empleado, dataEmpleado.telefono_empleado, dataEmpleado.direccion_empleado, correo_empleado];
        return db.execute(sql, values);
    }

    // Delete Empleado
    static async delete(correo_empleado: string) {
        const sql = 'DELETE FROM empleado WHERE correo_empleado = ?';
        const values = [correo_empleado];
        return db.execute(sql, values);
    }

    static async login(auth: AuthEmpleado) {
        const sql = 'SELECT * FROM empleado WHERE correo_empleado=?';
        const values = [auth.correo_empleado];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_empleado, result[0][0].contraseña_empleado);
            if (isPasswordValid) {
                return {
                    logged: true,
                    status: "Successful authentication",
                    id: result[0][0].id_empleado,
                    cc: result[0][0].cc_empleado,
                    name: result[0][0].nombre_empleado,
                    email: result[0][0].correo_empleado,
                    telefono: result[0][0].telefono_empleado,
                    direccion: result[0][0].direccion_empleado,
                };
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
        // Get Tecnico by email
    
            static async getByEmail(correo_empleado: string){
                const sql = 'SELECT * FROM empleado WHERE correo_empleado = ?';
                const values = [correo_empleado];
                const [rows] = await db.execute(sql, values);
                console.log(rows); 
                return rows; 
            }
}

export default EmpleadoRepository;