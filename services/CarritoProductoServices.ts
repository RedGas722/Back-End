import CarritoProducto from "../Dto/CarritoProductoDto/CarritoProductoDto";
import CarritoProductoRepository from "../repositories/CarritoProductoRepository";


class CarritoProductoServices {
    
    static async CarritoProductoRegister(carritoProducto: CarritoProducto) {
        return await CarritoProductoRepository.add(carritoProducto);
    }
}


export default CarritoProductoServices;