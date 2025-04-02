import db from '../config/config-db';
import Factura from '../Dto/FacturaDto/FacturaDto';

class FacturaRepository {

    // Insert Factura
    static async add(factura: Factura) {
        const sql = 'INSERT INTO factura (fecha_factura, estado_factura, total, id_pedido, id_empleado) VALUES (?, ?, ?, ?, ?)';
        const values = [factura.fecha_factura, factura.estado_factura, factura.total, factura.id_pedido, factura.id_empleado];
        return db.execute(sql, values);
    }

    // Get Factura
    static async getAll() {
        const sql = 'SELECT * FROM factura';
        return db.execute(sql);
    }

    static async getById(id_factura: number) {
        const sql = 'SELECT * FROM factura WHERE id_factura = ?';
        const values = [id_factura];
        return db.execute(sql, values);
    }

    // Update Factura
    static async update(factura: Factura) {
        const sql = 'UPDATE factura SET estado_factura = ?, total = ?, id_pedido = ?, id_empleado = ? WHERE fecha_factura = ?';
        const values = [factura.estado_factura, factura.total, factura.id_pedido, factura.id_empleado, factura.fecha_factura,];
        return db.execute(sql, values);
    }

    // Delete Factura
    static async delete(id_factura: number) {
        const sql = 'DELETE FROM factura WHERE id_factura = ?';
        const values = [id_factura];
        return db.execute(sql, values);
    }
}

export default FacturaRepository;