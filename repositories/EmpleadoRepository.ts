import db from '../config/config-db';
import Empleado from '../Dto/EmpleadoDto/EmpleadoDto';
import AuthEmpleado from '../Dto/EmpleadoDto/EmpleadoAuthDto';
import bcrypt from 'bcryptjs';

class EmpleadoRepository {

    // Insert Empleado
    static async add(empleado: Empleado) {
        const sql = `
            INSERT INTO empleado 
            (nombre_empleado, correo_empleado, telefono_empleado, direccion_empleado, contraseña_empleado) 
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [
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
            return db.execute(sql, values);
        }

        static async ClienteGetAll(){
            const sql = 'SELECT * FROM empleado';
            return db.execute(sql)
        }

    // Update Empleado
    static async update(empleado: Empleado) {
        const sql = 'UPDATE empleado SET nombre_empleado = ?, correo_empleado = ?, telefono_empleado = ?, direccion_empleado = ?, contraseña_empleado = ? WHERE correo_empleado = ?';
        const values = [empleado.nombre_empleado, empleado.correo_empleado, empleado.telefono_empleado, empleado.direccion_empleado, empleado.contraseña_empleado, empleado.correo_empleado];
        return db.execute(sql, values);
    }

    // Delete Empleado
    static async delete(correo_empleado: string) {
        const sql = 'DELETE FROM empleado WHERE correo_empleado = ?';
        const values = [correo_empleado];
        return db.execute(sql, values);
    }

    static async login(auth: AuthEmpleado) {
        const sql = 'SELECT id_empleado, contraseña_empleado FROM empleado WHERE correo_empleado=?';
        const values = [auth.correo_empleado];
        const result: any = await db.execute(sql, values);

        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña_empleado, result[0][0].contraseña_empleado);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_empleado};
            }
            return { logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }
}

export default EmpleadoRepository;