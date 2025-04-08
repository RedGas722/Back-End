import db from '../config/config-db';
import PedidoServicio from "../Dto/PedidoServicioDto/PedidoServicioDto";

class PedidoServicioRepository {

    // Insert Pedido
    static async add(pedidoServicio: PedidoServicio) {
        const sql = 'INSERT INTO pedido_servicio (id_servicio, id_factura, informacion_pedido, estado_pedido) VALUES (?, ?, ?, ?)';
        const values = [pedidoServicio.id_servicio, pedidoServicio.id_factura,  pedidoServicio.informacion_pedido, pedidoServicio.estado_pedido];
        return db.execute(sql, values);
    }

    // Get Pedido
    static async getAll() {
        const sql = 'SELECT * FROM pedido_servicio';
        return db.execute(sql);
    }

    static async getById(id_factura: number) {
        const sql = 'SELECT * FROM pedido_servicio WHERE id_factura = ?';
        const values = [id_factura];
        return db.execute(sql, values);
    }

    // Update Pedido
    static async update(pedidoServicio: PedidoServicio) {
        const sql = 'UPDATE pedido_servicio SET informacion_pedido = ?, estado_pedido = ?, id_servicio = ? WHERE id_factura = ?';
        const values = [pedidoServicio.informacion_pedido, pedidoServicio.estado_pedido, pedidoServicio.id_servicio, pedidoServicio.id_factura];
        return db.execute(sql, values);
    }

    // Delete Pedido
    static async delete(id_factura: number) {
        const sql = 'DELETE FROM pedido_servicio WHERE id_factura = ?';
        const values = [id_factura];
        return db.execute(sql, values);
    }
}

export default PedidoServicioRepository;