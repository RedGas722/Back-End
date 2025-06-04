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

    // Update Producto con imagen (sin actualizar categoría aquí)
    static async update(producto: Producto, nombre_producto: string) {
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ?, descuento = ?, fecha_descuento = ?, imagen = ? WHERE nombre_producto = ?';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.descuento, producto.fecha_descuento, producto.imagen, nombre_producto];
        return db.execute(sql, values);
    }

    // Update Producto sin imagen (sin actualizar categoría aquí)
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

    // Resetear descuentos cuyo plazo ha vencido y actualizar categorías
    static async resetearDescuentos(fechaActual: string) {
        // 1. Obtener productos con descuento vencido
        const [productosConDescuento] = await db.execute(
            `SELECT id_producto FROM producto WHERE descuento > 0 AND fecha_descuento = ?`,
            [fechaActual]
        );
        const productos = productosConDescuento as { id_producto: number }[];

        // 2. Resetear descuento
        const sqlReset = `
            UPDATE producto
            SET descuento = 0
            WHERE descuento > 0 AND fecha_descuento = ?
        `;
        await db.execute(sqlReset, [fechaActual]);

        // 3. Actualizar categoría de cada producto
        for (const prod of productos) {
            await this.actualizarCategoriaPorDescuento(prod.id_producto, 0);
        }
    }
    // Método para actualizar la categoría relacionada del producto según el descuento
    // Si descuento > 0 asigna la categoría "Ofertas" (ajusta el id según tu DB)
    // Si descuento == 0 elimina la relación con "Ofertas" y reasigna o deja sin categoría
    static async actualizarCategoriaPorDescuento(id_producto: number, descuento: number) {
        const ID_CATEGORIA_OFERTAS = 3; // Ajustar según tu base de datos

        if (descuento > 0) {
            // Asignar categoría "Ofertas" si no existe ya
            const [rows] = await db.execute(
                'SELECT * FROM se_encuentra WHERE id_producto = ? AND id_categoria = ?',
                [id_producto, ID_CATEGORIA_OFERTAS]
            );
            const rel = rows as any[];
            if (rel.length === 0) {
                await db.execute(
                    'INSERT INTO se_encuentra (id_producto, id_categoria) VALUES (?, ?)',
                    [id_producto, ID_CATEGORIA_OFERTAS]
                );
            }
        } else {
            // Descuento 0 -> eliminar categoría "Ofertas"
            await db.execute(
                'DELETE FROM se_encuentra WHERE id_producto = ? AND id_categoria = ?',
                [id_producto, ID_CATEGORIA_OFERTAS]
            );

            // Opcional: reasignar categoría "Sin categoría" si no tiene ninguna
            const [rowsCat] = await db.execute(
                'SELECT * FROM se_encuentra WHERE id_producto = ?',
                [id_producto]
            );
            const categorias = rowsCat as any[];
            if (categorias.length === 0) {
                const ID_CATEGORIA_SIN_CATEGORIA = 1; // Ajustar según DB
                await db.execute(
                    'INSERT INTO se_encuentra (id_producto, id_categoria) VALUES (?, ?)',
                    [id_producto, ID_CATEGORIA_SIN_CATEGORIA]
                );
            }
        }
    }
}

export default ProductoRepository;
