import Servicio from "../Dto/ServicioDto/ServicioDto";
import ServicioRepository from "../repositories/ServicioRepository";



class ServicioServices {
    
    static async ServicioRegister(servicio: Servicio) {
        return await ServicioRepository.add(servicio);
    }

}

export default ServicioServices;