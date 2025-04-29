import Producto from "../Dto/ProductoDto/ProductoDto";
import ProductoRepository from "../repositories/ProductoRepository";


class ProductoServices {
    // Register Producto
    static async ProductoRegister(producto: Producto) {
        return await ProductoRepository.add(producto);
    }

    // Get Producto
    static async ProductoGet(nombre_producto: string) {
        return await ProductoRepository.getByName(nombre_producto);
    }

    // Update Producto
    static async ProductoUpdate(producto: Producto, nombre_producto: string) {
        return await ProductoRepository.update(producto, nombre_producto);
    }

    // Delete Producto
    static async ProductoDelete(nombre_producto: string) {
        return await ProductoRepository.delete(nombre_producto);
    }

}

export default ProductoServices;