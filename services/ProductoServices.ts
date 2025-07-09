import Producto from "../Dto/ProductoDto/ProductoDto";
import ProductoNI from "../Dto/ProductoDto/ProductoNIDto";
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

    static async ProductoGetbyId(id_producto: number) {
        return await ProductoRepository.getById(id_producto);
    }

    // Update Producto
    static async ProductoUpdate(producto: Producto, nombre_producto: string) {
        return await ProductoRepository.update(producto, nombre_producto);
    }

    // Update ProductoNI
    static async ProductoUpdateNI(productoNI: ProductoNI, nombre_producto: string) {
        return await ProductoRepository.updateNI(productoNI, nombre_producto);
    }

    // Update ProductoStock
    static async ProductoUpdateStock(stock: number, id_producto: number) {
        return await ProductoRepository.updateStock(stock, id_producto);
    }

    // Delete Producto
    static async ProductoDelete(nombre_producto: string) {
        return await ProductoRepository.delete(nombre_producto);
    }

    // Otros Get

    static async ProductoGetAll() {
        return await ProductoRepository.getAll();
    }

    static async getAllProductoCategoria(nombre_categoria: string, page: number, limit: number) {
        return await ProductoRepository.getAllProductoCategoria(nombre_categoria, page, limit);
    }

    static async getAllPaginated(page: number, limit: number) {
        return await ProductoRepository.getAllPaginated(page, limit);
    }

    // Resetear descuentos vencidos
    static async ProductoResetearDescuentos() {
        const hoy = new Date().toISOString().slice(0, 10); // formato YYYY-MM-DD
        return await ProductoRepository.resetearDescuentos(hoy);
    }

    static async getAllNames() {
        return await ProductoRepository.getAllNames();
    }

    static async ProductoGetPartialName(query: string) {
        return await ProductoRepository.buscarPorNombreParcial(query);
    }
}

export default ProductoServices;