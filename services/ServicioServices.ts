import Servicio from "../Dto/ServicioDto/ServicioDto";
import ServicioRepository from "../repositories/ServicioRepository";



class ServicioServices {
    
    static async ServicioRegister(servicio: Servicio) {
        return await ServicioRepository.add(servicio);
    }
    static async getbyNombre(nombre_servicio: string) {
        return await ServicioRepository.getByName(nombre_servicio);
    }

    static async ServicioGet(nombre_servicio: string) {
        return await ServicioRepository.getByName(nombre_servicio);
    }
    static async ServicioDelete(nombre_servicio: string) {
        return await ServicioRepository.delete(nombre_servicio);
    }
    static async ServicioGetAll() {
        return await ServicioRepository.getAll();
    }

}

export default ServicioServices;