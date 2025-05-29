import db from '../config/config-db';
import Producto from '../Dto/ProductoDto/ProductoDto';
import ProductoNI from '../Dto/ProductoDto/ProductoNIDto';

class ProductoRepository {

    // Método interno para convertir imagen Buffer a base64
    private static convertirImagenBase64(productos: any[]) {
        return productos.map(producto => {
            if (producto.imagen && producto.imagen instanceof Buffer) {
                producto.imagen = producto.imagen.toString('base64');
            }
            return producto;
        });
    }

    // Insert Producto
    static async add(producto: Producto) {
        const sql = 'INSERT INTO producto (nombre_producto, descripcion_producto, precio_producto, stock, descuento, fecha_descuento, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.descuento, producto.fecha_descuento, producto.imagen];
        return db.execute(sql, values);
    }

    // Get all productos
    static async getAll() {
        const [rows] = await db.execute(`SELECT p.*, c.nombre_categoria
        FROM producto p
        JOIN se_encuentra se ON p.id_producto = se.id_producto
        JOIN categoria c ON se.id_categoria = c.id_categoria;
            `);
        const productos = rows as any[];
        return this.convertirImagenBase64(productos);
    }

    // Get productos por nombre de categoria
    static async getAllProductoCategoria(nombre_categoria: string) {
        const sql = `
            SELECT p.* FROM producto p
            JOIN se_encuentra se ON p.id_producto = se.id_producto
            JOIN categoria c ON se.id_categoria = c.id_categoria
            WHERE c.nombre_categoria = ?
        `;
        const values = [nombre_categoria];
        const [rows] = await db.execute(sql, values);
        const productos = rows as any[];
        return this.convertirImagenBase64(productos);
    }

    // Obtener producto por nombre exacto
    static async getByName(nombre_producto: string) {
        const sql = `SELECT p.*, c.nombre_categoria 
        FROM producto p
        LEFT JOIN se_encuentra se ON p.id_producto = se.id_producto
        LEFT JOIN categoria c ON se.id_categoria = c.id_categoria
        WHERE p.nombre_producto = ?`;
        const values = [nombre_producto];
        const [rows] = await db.execute(sql, values);
        return this.convertirImagenBase64(rows as any[]);
    }

    // Filtrar productos por nombre (LIKE)
    static async filterByName(nombre_producto: string) {
        const sql = "SELECT * FROM producto WHERE nombre_producto LIKE ?";
        const values = [`%${nombre_producto}%`];
        const [rows] = await db.execute(sql, values);
        return this.convertirImagenBase64(rows as any[]);
    }

    // Update Producto con imagen
    static async update(producto: Producto, nombre_producto: string) {
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ?, descuento = ?, fecha_descuento = ?, imagen = ? WHERE nombre_producto = ?';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.descuento, producto.fecha_descuento, producto.imagen, nombre_producto];
        return db.execute(sql, values);
    }

    // Update Producto sin imagen
    static async updateNI(productoNI: ProductoNI, nombre_producto: string) {
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ?, descuento = ?, fecha_descuento = ? WHERE nombre_producto = ?';
        const values = [productoNI.nombre_producto, productoNI.descripcion_producto, productoNI.precio_producto, productoNI.stock, productoNI.descuento, productoNI.fecha_descuento, nombre_producto];
        return db.execute(sql, values);
    }

    // Delete Producto por nombre
    static async delete(nombre_producto: string) {
        const sql = 'DELETE FROM producto WHERE nombre_producto = ?';
        const values = [nombre_producto];
        return db.execute(sql, values);
    }
}

export default ProductoRepository;
