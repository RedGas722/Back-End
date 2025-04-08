import EmpleadoRepository from '../repositories/EmpleadoRepository';
import Empleado from '../Dto/EmpleadoDto/EmpleadoDto';
import generateHash from '../Helpers/generateHash';
import AuthEmpleado from '../Dto/EmpleadoDto/EmpleadoAuthDto';

class EmpleadoServices {
    
    static async EmpleadoRegister(empleado: Empleado) {
        try {
            empleado.contraseña_empleado = await generateHash(empleado.contraseña_empleado);
            return await EmpleadoRepository.add(empleado);
        } catch (error) {
            console.error("Error en el servicio de registro:", error);
            throw error;
        }
    }

    static async login(auth: AuthEmpleado) {
        return await EmpleadoRepository.login(auth);
    }
    static async getByEmail(correo_empleado: string) {
        try {
        return await EmpleadoRepository.getByEmail(correo_empleado);
        }catch (error) {
            console.error("Error en el servicio de obtener empleado por correo:", error);
            throw error;
        }
    }
}

export default EmpleadoServices;