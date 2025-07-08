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

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const safePage = parseInt(String(page), 10) || 1;
        const safeLimit = parseInt(String(limit), 10) || 10;
        const offset = (safePage - 1) * safeLimit;

        const sql = `
            SELECT 
            p.id_producto,
            p.nombre_producto,
            p.descripcion_producto,
            p.precio_producto,
            p.stock,
            p.imagen,
            p.descuento,
            p.fecha_descuento,
            GROUP_CONCAT(c.nombre_categoria) AS categorias
            FROM producto p
            LEFT JOIN se_encuentra se ON p.id_producto = se.id_producto
            LEFT JOIN categoria c ON se.id_categoria = c.id_categoria
            GROUP BY p.id_producto
            ORDER BY p.id_producto DESC
            LIMIT ${safeLimit} OFFSET ${offset}
        `;

        const countSql = `SELECT COUNT(DISTINCT id_producto) as total FROM producto`;

        try {
            const [rows]: any = await db.query(sql);
            const [countRows]: any = await db.query(countSql);

            type ProductoRow = {
                id_producto: number;
                nombre_producto: string;
                descripcion_producto: string;
                precio_producto: number;
                stock: number;
                imagen: Buffer | string | null;
                descuento: number;
                fecha_descuento: string | null;
                categorias: string | null;
            };

            const productosFinales = (rows as ProductoRow[]).map(p => ({
                ...p,
                categorias: p.categorias ? p.categorias.split(',') : [],
            }));

            const productosConImagen = this.convertirImagenBase64(productosFinales);

            const totalItems = countRows[0].total;
            const totalPages = Math.ceil(totalItems / safeLimit);

            return {
                currentPage: safePage,
                totalPages,
                totalItems,
                itemsPerPage: safeLimit,
                data: productosConImagen,
            };
        } catch (error) {
            console.error("Error al obtener productos paginados:", error);
            throw error;
        }
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


    static async getById(id_producto: number) {
        const sql = 'SELECT * FROM producto WHERE id_producto = ?';
        const [rows]: any = await db.execute(sql, [id_producto]);

        if (rows.length === 0) return null;

        const producto = rows[0];

        // Reutilizar el método existente
        const [productoConImagen] = this.convertirImagenBase64([producto]);
        return productoConImagen;
    }

    static async getAllNames() {
        const sql = 'SELECT id_producto, nombre_producto FROM producto';
        const [rows]: any = await db.execute(sql);
        return rows;
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

    static async updateStock(descontar: number, id_producto: number) {
        const sql = 'UPDATE producto SET stock = stock - ? WHERE id_producto = ? AND stock >= ?';
        const values = [descontar, id_producto, descontar];
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
            `SELECT id_producto FROM producto WHERE descuento > 0 AND DATE(fecha_descuento) = ?`,
            [fechaActual]
        );
        const productos = productosConDescuento as { id_producto: number }[];

        // 2. Resetear descuento en esos productos
        await db.execute(
            `UPDATE producto SET descuento = 0 WHERE descuento > 0 AND DATE(fecha_descuento) = ?`,
            [fechaActual]
        );

        // 3. Eliminar solo la relación con la categoría "Ofertas"
        for (const prod of productos) {
            await db.execute(
                `
                DELETE FROM se_encuentra 
                WHERE id_producto = ? 
                AND id_categoria = (
                    SELECT id_categoria FROM categoria WHERE nombre_categoria = 'Ofertas' LIMIT 1
                )
                `,
                [prod.id_producto]
            );
        }
    }

    static async buscarPorNombreParcial(query: string) {
        const sql = `
    SELECT 
      p.id_producto,
      p.nombre_producto,
      p.descripcion_producto,
      p.precio_producto,
      p.stock,
      p.imagen,
      p.descuento,
      p.fecha_descuento,
      GROUP_CONCAT(c.nombre_categoria) AS categorias
    FROM producto p
    LEFT JOIN se_encuentra se ON p.id_producto = se.id_producto
    LEFT JOIN categoria c ON c.id_categoria = se.id_categoria
    WHERE LOWER(p.nombre_producto) LIKE LOWER(CONCAT('%', ?, '%'))
    GROUP BY p.id_producto
  `;

        const [rows]: any = await db.execute(sql, [query]);

        const productosFormateados = rows.map((producto: any) => ({
            ...producto,
            categorias: producto.categorias ? producto.categorias.split(',') : []
        }));

        return this.convertirImagenBase64(productosFormateados);
    }

}

export default ProductoRepository;
