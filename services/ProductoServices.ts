import Producto from "../Dto/ProductoDto/ProductoDto";
import ProductoNI from "../Dto/ProductoDto/ProductoNIDto";
import ProductoRepository from "../repositories/ProductoRepository";
import { redis } from "../config/redis";

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

    // Update ProductoNI
    static async ProductoUpdateNI(productoNI: ProductoNI, nombre_producto: string) {
        return await ProductoRepository.updateNI(productoNI, nombre_producto);
    }

    // Delete Producto
    static async ProductoDelete(nombre_producto: string) {
        return await ProductoRepository.delete(nombre_producto);
    }

    // Otros Get

    static async ProductoGetAll() {
        return await ProductoRepository.getAll();
    }

    static async getAllProductoCategoria(nombre_categoria: string) {
        return await ProductoRepository.getAllProductoCategoria(nombre_categoria);

    }

    static async ProductoFilterByName(nombre_producto: string) {
        return await ProductoRepository.filterByName(nombre_producto);
    }

}

export default ProductoServices;