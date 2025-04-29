import CarritoServicio from "../Dto/CarritoServicioDto/CarritoServicioDto";
import CarritoServicioRepository from "../repositories/CarritoServicioRepository";



class CarritoServicioServices {
    
    static async CarritoServicioRegister(carritoServicio: CarritoServicio) {
        return await CarritoServicioRepository.add(carritoServicio);
    }
}


export default CarritoServicioServices;