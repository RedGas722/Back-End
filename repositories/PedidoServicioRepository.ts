import db from '../config/config-db';
import PedidoServicio from "../Dto/PedidoServicioDto/PedidoServicioDto";

class PedidoServicioRepository {

    // Insert Pedido
    static async add(pedidoServicio: PedidoServicio) {
        const sql = 'INSERT INTO pedido_servicio (id_cliente, id_tecnico, total, descripcion, estado_pedido) VALUES (?, ?, ?, ?, ?)';
        const values = [pedidoServicio.id_cliente, pedidoServicio.id_tecnico, pedidoServicio.total, pedidoServicio.descripcion, pedidoServicio.estado_pedido];
        return db.execute(sql, values);
    }

    // Get Pedido
    static async getAll() {
        const sql = 'SELECT * FROM pedido_servicio';
        const [rows]: any = await db.execute(sql);
        return [rows][0];
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const safePage = parseInt(String(page), 10) || 1;
        const safeLimit = parseInt(String(limit), 10) || 10;
        const offset = (safePage - 1) * safeLimit;

        const sql = `
            SELECT * FROM pedido_servicio
            ORDER BY id_pedidoServicio DESC
            LIMIT ${safeLimit} OFFSET ${offset}
        `;

        const countSql = `SELECT COUNT(*) as total FROM pedido_servicio`;

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

    static async getById(id_cliente: number) {
        const sql = 'SELECT * FROM pedido_servicio WHERE id_cliente = ?';
        const values = [id_cliente];
        const [rows]: any = await db.execute(sql, values);
        return [rows][0];
    }
}

export default PedidoServicioRepository;