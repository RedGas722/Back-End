import db from '../config/config-db';
import Producto from '../Dto/ProductoDto/ProductoDto';
import ProductoNI from '../Dto/ProductoDto/ProductoNIDto';

class ProductoRepository {

    private static convertirImagenBase64(productos: any[]) {
        return productos.map(producto => {
            if (producto.imagen && producto.imagen instanceof Buffer) {
                producto.imagen = producto.imagen.toString('base64');
            }
            return producto;
        });
    }

    private static async obtenerIdCategoriaPorNombre(nombre_categoria: string): Promise<number | null> {
        const sql = 'SELECT id_categoria FROM categoria WHERE nombre_categoria = ? LIMIT 1';
        const [rows] = await db.execute(sql, [nombre_categoria]);
        const resultados = rows as any[];
        if (resultados.length > 0) {
            return resultados[0].id_categoria;
        }
        return null;
    }

    static async add(producto: Producto) {
        const sql = 'INSERT INTO producto (nombre_producto, descripcion_producto, precio_producto, stock, descuento, fecha_descuento, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.descuento, producto.fecha_descuento, producto.imagen];
        return db.execute(sql, values);
    }

    static async getAll() {
        const [rows] = await db.execute(`
            SELECT p.*, c.nombre_categoria
            FROM producto p
            JOIN se_encuentra se ON p.id_producto = se.id_producto
            JOIN categoria c ON se.id_categoria = c.id_categoria;
        `);

        // Agrupar productos por ID
        const productosMap = new Map<number, any>();

        for (const row of rows as any[]) {
            const id = row.id_producto;

            if (!productosMap.has(id)) {
                // Inicializar producto con categoría como array
                productosMap.set(id, {
                    ...row,
                    categorias: [row.nombre_categoria],
                });
            } else {
                // Agregar categoría adicional
                productosMap.get(id).categorias.push(row.nombre_categoria);
            }
        }

        // Convertir a array y eliminar `nombre_categoria` con desestructuración
        const productosAgrupados = Array.from(productosMap.values()).map(({ nombre_categoria, ...rest }) => rest);

        return this.convertirImagenBase64(productosAgrupados);
    }


    static async getAllProductoCategoria(nombre_categoria: string) {
    let sql = `
        SELECT p.* FROM producto p
        JOIN se_encuentra se ON p.id_producto = se.id_producto
        JOIN categoria c ON se.id_categoria = c.id_categoria
        WHERE c.nombre_categoria = ?
    `;

    const values = [nombre_categoria];

    if (nombre_categoria !== 'Ofertas') {
        sql += `
        AND p.id_producto NOT IN (
            SELECT se2.id_producto
            FROM se_encuentra se2
            JOIN categoria c2 ON se2.id_categoria = c2.id_categoria
            WHERE c2.nombre_categoria = 'Ofertas'
        )
        `;
    }

    const [rows] = await db.execute(sql, values);
    const productos = rows as any[];
    return this.convertirImagenBase64(productos);
    }

    static async getByName(nombre_producto: string) {
        const sql = `
            SELECT p.*, c.nombre_categoria 
            FROM producto p
            LEFT JOIN se_encuentra se ON p.id_producto = se.id_producto
            LEFT JOIN categoria c ON se.id_categoria = c.id_categoria
            WHERE p.nombre_producto = ?
        `;
        const values = [nombre_producto];
        const [rows] = await db.execute(sql, values);

        // Agrupar categorías por producto
        const productosMap = new Map<number, any>();

        for (const row of rows as any[]) {
            const id = row.id_producto;

            if (!productosMap.has(id)) {
                productosMap.set(id, {
                    ...row,
                    categorias: [row.nombre_categoria],
                });
            } else {
                productosMap.get(id).categorias.push(row.nombre_categoria);
            }
        }

        // Eliminar nombre_categoria con desestructuración
        const productosAgrupados = Array.from(productosMap.values()).map(({ nombre_categoria, ...rest }) => rest);

        return this.convertirImagenBase64(productosAgrupados);
    }


    static async filterByName(nombre_producto: string) {
        const sql = "SELECT * FROM producto WHERE nombre_producto LIKE ?";
        const values = [`%${nombre_producto}%`];
        const [rows] = await db.execute(sql, values);
        return this.convertirImagenBase64(rows as any[]);
    }

    static async update(producto: Producto, nombre_producto: string) {
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ?, descuento = ?, fecha_descuento = ?, imagen = ? WHERE nombre_producto = ?';
        const values = [producto.nombre_producto, producto.descripcion_producto, producto.precio_producto, producto.stock, producto.descuento, producto.fecha_descuento, producto.imagen, nombre_producto];
        return db.execute(sql, values);
    }

    static async updateNI(productoNI: ProductoNI, nombre_producto: string) {
        const sql = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, stock = ?, descuento = ?, fecha_descuento = ? WHERE nombre_producto = ?';
        const values = [productoNI.nombre_producto, productoNI.descripcion_producto, productoNI.precio_producto, productoNI.stock, productoNI.descuento, productoNI.fecha_descuento, nombre_producto];
        return db.execute(sql, values);
    }

    static async delete(nombre_producto: string) {
        const sql = 'DELETE FROM producto WHERE nombre_producto = ?';
        const values = [nombre_producto];
        return db.execute(sql, values);
    }

    static async resetearDescuentos(fechaActual: string) {
        // 1. Obtener productos con descuento vencido exactamente en la fechaActual
        const [productosConDescuento] = await db.execute(
            `SELECT id_producto FROM producto WHERE descuento > 0 AND fecha_descuento = ?`,
            [fechaActual]
        );
        const productos = productosConDescuento as { id_producto: number }[];

        // 2. Resetear descuento en esos productos
        await db.execute(
            `UPDATE producto SET descuento = 0 WHERE descuento > 0 AND fecha_descuento = ?`,
            [fechaActual]
        );

        // 3. Eliminar relación con "Ofertas"
        const idCategoriaOfertas = await this.obtenerIdCategoriaPorNombre('Ofertas');
        if (!idCategoriaOfertas) {
            throw new Error('Categoría "Ofertas" no encontrada.');
        }

        for (const prod of productos) {
            await db.execute(
                `DELETE FROM se_encuentra WHERE id_producto = ? AND id_categoria = ?`,
                [prod.id_producto, idCategoriaOfertas]
            );
        }
    }

    static async resetearDescuentosDePrueba() {
        // 1. Obtener todos los productos que tienen descuento activo (> 0)
        const [productosConDescuento] = await db.execute(
            `SELECT id_producto FROM producto WHERE descuento > 0`
        );
        const productos = productosConDescuento as { id_producto: number }[];

        // 2. Resetear descuento a 0 para todos esos productos
        await db.execute(
            `UPDATE producto SET descuento = 0 WHERE descuento > 0`
        );

        // 3. Eliminar la relación con "Ofertas"
        const idCategoriaOfertas = await this.obtenerIdCategoriaPorNombre('Ofertas');
        if (!idCategoriaOfertas) {
            throw new Error('Categoría "Ofertas" no encontrada.');
        }

        for (const prod of productos) {
            await db.execute(
                `DELETE FROM se_encuentra WHERE id_producto = ? AND id_categoria = ?`,
                [prod.id_producto, idCategoriaOfertas]
            );
        }
    }

}

export default ProductoRepository;
