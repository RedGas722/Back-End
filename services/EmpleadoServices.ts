import EmpleadoRepository from '../repositories/EmpleadoRepository';
import Empleado from '../Dto/EmpleadoDto/EmpleadoDto';
import generateHash from '../Helpers/generateHash';
import AuthEmpleado from '../Dto/EmpleadoDto/EmpleadoAuthDto';

class EmpleadoServices {

    //Empleado Register
    static async EmpleadoRegister(empleado: Empleado) {
        try {
            empleado.contraseña_empleado = await generateHash(empleado.contraseña_empleado);
            return await EmpleadoRepository.add(empleado);
        } catch (error) {
            console.error("Error en el servicio de registro:", error);
            throw error;
        }
    }
    
    //Empleado Login
    static async login(auth: AuthEmpleado) {
        return await EmpleadoRepository.login(auth);
    }

    //Empleado Update
    static async EmpleadoUpdate(empleado: Empleado,  correo_empleado: string) {
        empleado.contraseña_empleado = await generateHash(empleado.contraseña_empleado);
        return await EmpleadoRepository.update(empleado,  correo_empleado);
    }

    // Empleado Delete  
    static async EmpleadoDelete(correo_empleado: string) {
        return await EmpleadoRepository.delete(correo_empleado);
    }
    
    static async EmpleadoGetAll(){
        return await EmpleadoRepository.ClienteGetAll();
    }

    static async GetEmpleado(correo_empleado: string) {
        return await EmpleadoRepository.getByCorreo(correo_empleado);
    }
}

export default EmpleadoServices;