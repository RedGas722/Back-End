import Producto from "../Dto/ProductoDto/ProductoDto";
import ProductoRepository from "../repositories/ProductoRepository";


class ProductoServices {
    
    static async ProductoRegister(producto: Producto) {
        return await ProductoRepository.add(producto);
    }

    static async ProductoGet(nombre_producto: string) {
        return await ProductoRepository.getByName(nombre_producto);
    }

    static async ProductoDelete(nombre_producto: string) {
        return await ProductoRepository.delete(nombre_producto);
    }

    static async ProductoGetAll() {
        return await ProductoRepository.getAll();
    }

}

export default ProductoServices;