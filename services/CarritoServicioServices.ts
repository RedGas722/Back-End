import CarritoServicio from "../Dto/CarritoServicioDto/CarritoServicioDto";
import CarritoServicioRepository from "../repositories/CarritoServicioRepository";



class CarritoServicioServices {
    
    static async CarritoServicioRegister(carritoServicio: CarritoServicio) {
        return await CarritoServicioRepository.add(carritoServicio);
    }

    static async CarritoServicioDelete(id_carrito_servicio: number) {
        return await CarritoServicioRepository.delete(id_carrito_servicio);
    }
}


export default CarritoServicioServices;