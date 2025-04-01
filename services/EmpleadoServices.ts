import EmpleadoRepository from '../repositories/EmpleadoRepository';
import Empleado from '../Dto/EmpleadoDto/EmpleadoDto';
import generateHash from '../Helpers/generateHash';
import AuthEmpleado from '../Dto/EmpleadoDto/authEmpleadoDto';

class EmpleadoServices {
    
    static async register(Empleado: Empleado) {
        try {
            Empleado.contraseña_empleado = await generateHash(Empleado.contraseña_empleado);
            return await EmpleadoRepository.add(Empleado);
        } catch (error) {
            console.error("Error en el servicio de registro:", error);
            throw error;
        }
    }

    static async login(AuthEmpleado: AuthEmpleado) {
        return await EmpleadoRepository.login(AuthEmpleado);
    }
}

export default EmpleadoServices;