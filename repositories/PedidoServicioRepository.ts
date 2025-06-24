import db from '../config/config-db';
import PedidoServicio from "../Dto/PedidoServicioDto/PedidoServicioDto";

class PedidoServicioRepository {

    private static convertirImagenBase64(pedidos: any[]) {
        return pedidos.map(pedido => {
            if (pedido.firma && pedido.firma instanceof Buffer) {
                pedido.firma = pedido.firma.toString('base64');
            }
            return pedido;
        });
    }

    // Insert Pedido
    static async add(pedidoServicio: PedidoServicio) {
        const sql = 'INSERT INTO pedido_servicio (id_servicio, id_cliente, id_tecnico, firma) VALUES (?, ?, ?, ?)';
        const values = [pedidoServicio.id_servicio, pedidoServicio.id_cliente, pedidoServicio.id_tecnico, pedidoServicio.firma];
        return db.execute(sql, values);
    }

    // Get Pedido
    static async getAll() {
        const sql = 'SELECT * FROM pedido_servicio';
        const [rows]: any = await db.execute(sql);
        return this.convertirImagenBase64(rows);
    }

    static async getById(id_cliente: number) {
        const sql = 'SELECT * FROM pedido_servicio WHERE id_cliente = ?';
        const values = [id_cliente];
        const [rows]: any = await db.execute(sql, values);
        return this.convertirImagenBase64(rows);
    }

    // // Update Pedido
    // static async update(pedidoServicio: PedidoServicio) {
    //     const sql = 'UPDATE pedido_servicio SET informacion_pedido = ?, estado_pedido = ?, id_servicio = ? WHERE id_factura = ?';
    //     const values = [pedidoServicio.estado_pedido, pedidoServicio.id_servicio, pedidoServicio.id_factura];
    //     return db.execute(sql, values);
    // }

    // // Delete Pedido
    // static async delete(id_factura: number) {
    //     const sql = 'DELETE FROM pedido_servicio WHERE id_factura = ?';
    //     const values = [id_factura];
    //     return db.execute(sql, values);
    // }
}

export default PedidoServicioRepository;