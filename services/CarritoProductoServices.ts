import CarritoProducto from "../Dto/CarritoProductoDto/CarritoProductoDto";
import CarritoProductoRepository from "../repositories/CarritoProductoRepository";


class CarritoProductoServices {
    
    static async CarritoProductoRegister(carritoProducto: CarritoProducto) {
        return await CarritoProductoRepository.add(carritoProducto);
    }

    static async CarritoProductoDelete(id_carrito_producto: number) {
        return await CarritoProductoRepository.delete(id_carrito_producto);
    }
}


export default CarritoProductoServices;