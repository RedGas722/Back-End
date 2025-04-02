import db from '../config/config-db';
import Empleado from '../Dto/EmpleadoDto/EmpleadoDto';
import AuthEmpleado from '../Dto/EmpleadoDto/EmpleadoAuthDto';
import bcrypt from 'bcryptjs';

class EmpleadoRepository {

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