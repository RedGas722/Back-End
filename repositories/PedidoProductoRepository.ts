import db from '../config/config-db';
import PedidoProducto from "../Dto/PedidoProductoDto/PedidoProductoDto";

class PedidoProductoRepository {

    // Insert Pedido
    static async add(pedidoProducto: PedidoProducto) {
        const sql = 'INSERT INTO pedido_producto (id_producto, id_factura, cantidad_producto, informacion_pedido, estado_pedido) VALUES (?, ?, ?, ?, ?)';
        const values = [pedidoProducto.id_producto, pedidoProducto.id_factura, pedidoProducto.cantidad_producto, pedidoProducto.informacion_pedido, pedidoProducto.estado_pedido];
        return db.execute(sql, values);
    }

    // Get Pedido
    static async getAll() {
        const sql = 'SELECT * FROM pedido_producto';
        return db.execute(sql);
    }

    static async getById(id_factura: number) {
        const sql = 'SELECT * FROM pedido_producto WHERE id_factura = ?';
        const values = [id_factura];
        return db.execute(sql, values);
    }

    // Update Pedido
    static async update(pedidoProducto: PedidoProducto) {
        const sql = 'UPDATE pedido_producto SET informacion_pedido = ?, cantidad_producto = ?, estado_pedido = ?, id_producto = ? WHERE id_factura = ?';
        const values = [pedidoProducto.informacion_pedido, pedidoProducto.cantidad_producto, pedidoProducto.estado_pedido, pedidoProducto.id_producto, pedidoProducto.id_factura];
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