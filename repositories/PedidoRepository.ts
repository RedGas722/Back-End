import db from '../config/config-db';
import Pedido from "../Dto/PedidoDto/PedidoDto";

class PedidoRepository {

    // Insert Pedido
    static async add(pedido: Pedido) {
        const sql = 'INSERT INTO pedido (fecha_pedido, informacion_pedido, cantidad_productos, estado_pedido, id_cliente) VALUES (?, ?, ?, ?, ?)';
        const values = [pedido.fecha_pedido, pedido.informacion_pedido, pedido.cantidad_productos, pedido.estado_pedido, pedido.id_cliente];
        return db.execute(sql, values);
    }

    // Get Pedido
    static async getAll() {
        const sql = 'SELECT * FROM pedido';
        return db.execute(sql);
    }

    static async getById(id_pedido: number) {
        const sql = 'SELECT * FROM pedido WHERE id_pedido = ?';
        const values = [id_pedido];
        return db.execute(sql, values);
    }

    // Update Pedido
    static async update(pedido: Pedido) {
        const sql = 'UPDATE pedido SET informacion_pedido = ?, cantidad_productos = ?, estado_pedido = ?, id_cliente = ? WHERE fecha_pedido = ?';
        const values = [pedido.informacion_pedido, pedido.cantidad_productos, pedido.estado_pedido, pedido.id_cliente];
        return db.execute(sql, values);
    }

    // Delete Pedido
    static async delete(id_pedido: number) {
        const sql = 'DELETE FROM pedido WHERE id_pedido = ?';
        const values = [id_pedido];
        return db.execute(sql, values);
    }
}

export default PedidoRepository;