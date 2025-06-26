import db from '../config/config-db';
import PedidoProducto from "../Dto/PedidoProductoDto/PedidoProductoDto";

class PedidoProductoRepository {

    // Insert Pedido
    static async add(pedidoProducto: PedidoProducto) {
        const sql = 'INSERT INTO pedido_producto (id_producto, id_factura, cantidad_producto, estado_pedido) VALUES (?, ?, ?, ?)';
        const values = [pedidoProducto.id_producto, pedidoProducto.id_factura, pedidoProducto.cantidad_producto, pedidoProducto.estado_pedido];
        return db.execute(sql, values);
    }

    // Get Pedido
    static async getAll() {
        const sql = 'SELECT * FROM pedido_producto';
        const [rows] = await db.execute(sql);
        return rows;
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const safePage = parseInt(String(page), 10) || 1;
        const safeLimit = parseInt(String(limit), 10) || 10;
        const offset = (safePage - 1) * safeLimit;

        const sql = `
            SELECT * FROM pedido_producto
            ORDER BY id_pedidoProducto DESC
            LIMIT ${safeLimit} OFFSET ${offset}
        `;

        const countSql = `SELECT COUNT(*) as total FROM pedido_producto`;

        const [rows] = await db.query(sql);
        const [countRows]: any = await db.execute(countSql);

        const totalItems = countRows[0].total;
        const totalPages = Math.ceil(totalItems / safeLimit);

        return {
            currentPage: safePage,
            totalPages,
            totalItems,
            itemsPerPage: safeLimit,
            data: rows,
        };
    }

    static async getById(id_factura: number) {
        const sql = 'SELECT * FROM pedido_producto WHERE id_factura = ?';
        const values = [id_factura];
        const [rows]: any = await db.execute(sql, values);
        return rows;
    }

    // Update Pedido
    static async update(pedidoProducto: PedidoProducto) {
        const sql = 'UPDATE pedido_producto SET  cantidad_producto = ?, estado_pedido = ?, id_producto = ? WHERE id_factura = ?';
        const values = [pedidoProducto.cantidad_producto, pedidoProducto.estado_pedido, pedidoProducto.id_producto, pedidoProducto.id_factura];
        return db.execute(sql, values);
    }

    // Delete Pedido
    static async delete(id_factura: number) {
        const sql = 'DELETE FROM pedido_producto WHERE id_factura = ?';
        const values = [id_factura];
        return db.execute(sql, values);
    }
}

export default PedidoProductoRepository;