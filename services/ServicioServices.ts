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
    static async ServicioGet(nombre_servicio: string) {
        return await ServicioRepository.getByName(nombre_servicio);
    }

    static async ServicioDelete(nombre_servicio: string) {
        return await ServicioRepository.delete(nombre_servicio);
    }

    static async ServicioGetAll() {
        return await ServicioRepository.getAll();
    }

    static async getAllPaginated(page: number, limit: number) {
        return await ServicioRepository.getAllPaginated(page, limit);
    }
}

export default ServicioServices;