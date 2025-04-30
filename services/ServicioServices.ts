import Servicio from "../Dto/ServicioDto/ServicioDto";
import ServicioRepository from "../repositories/ServicioRepository";



class ServicioServices {
    
    // Servicio Register
    static async ServicioRegister(servicio: Servicio) {
        return await ServicioRepository.add(servicio);
    }

    // Servicio Update
    static async ServicioUpdate(servicio: Servicio, nuevo_nombre_servicio: string) { 
        return await ServicioRepository.update(servicio, nuevo_nombre_servicio);
    }

    // Servicio Delete
    static async ServicioDelete(nombre_servicio: string) {
        return await ServicioRepository.delete(nombre_servicio);
    }

}

export default ServicioServices;