import db from '../config/config-db';
import Producto from '../Dto/ProductoDto/ProductoDto';
import ProductoNI from '../Dto/ProductoDto/ProductoNIDto';

class ProductoRepository {

    // Insert Producto
    static async add(producto: Producto) {
        const sql = 'INSERT INTO producto (nombre_producto, descripcion_producto, precio_producto, stock, imagen) VALUES (?, ?, ?, ?, ?)';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.imagen];
        return db.execute(sql, values);
    }

    // Get Producto
    static async getAll() {
        const sql = 'SELECT * FROM producto';
        return db.execute(sql);
    }

    static async getByName(nombre_producto: string) {
        const sql = 'SELECT * FROM producto WHERE nombre_producto = ?';
        const values = [nombre_producto];
        const [rows] = await db.execute(sql, values);
        return rows;
    }

    static async filterByName(nombre_producto: string) {
        const sql = "SELECT * FROM producto WHERE nombre_producto LIKE ?";
        const values = [`%${nombre_producto}%`];
        const [rows] = await db.execute(sql, values);
        return rows;
    }

    // Update Producto
    static async update(producto: Producto, nombre_producto: string) {
        
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ?, imagen = ? WHERE nombre_producto = ?';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.imagen, nombre_producto];
        return db.execute(sql, values);
    }

    // Update Producto
    static async updateNI(productoNI: ProductoNI, nombre_producto: string) {
        
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ? WHERE nombre_producto = ?';
        const values = [productoNI.nombre_producto, productoNI.descripcion_producto, productoNI.precio_producto, productoNI.stock, nombre_producto];
        return db.execute(sql, values);
    }

    // Delete Producto
    static async delete(nombre_producto: string) {
        const sql = 'DELETE FROM producto WHERE nombre_producto = ?';
        const values = [nombre_producto];
        return db.execute(sql, values);
    }
}

export default ProductoRepository;