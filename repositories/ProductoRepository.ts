import db from '../config/config-db';
import Producto from '../Dto/ProductoDto/ProductoDto';

class ProductoRepository {

    // Insert Producto
    static async add(producto: Producto) {
        const sql = 'INSERT INTO producto (nombre_producto, descripcion_producto, precio_producto, imagen) VALUES (?, ?, ?, ?)';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.imagen];
        return db.execute(sql, values);
    }

    // Get Producto
    static async getAll() {
        const sql = 'SELECT * FROM producto';
        return db.execute(sql);
    }

    static async getById(id_producto: number) {
        const sql = 'SELECT * FROM producto WHERE id_producto = ?';
        const values = [id_producto];
        return db.execute(sql, values);
    }

    // Update Producto
    static async update(producto: Producto) {
        const sql = 'UPDATE producto SET nombre_producto = ?, desc_producto = ?, precio_producto = ?, imagen = ? WHERE nombre_producto = ?';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.imagen, producto.nombre_producto];
        return db.execute(sql, values);
    }

    // Delete Producto
    static async delete(id_producto: number) {
        const sql = 'DELETE FROM producto WHERE id_producto = ?';
        const values = [id_producto];
        return db.execute(sql, values);
    }
}

export default ProductoRepository;