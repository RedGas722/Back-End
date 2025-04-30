import db from '../config/config-db';
import Factura from '../Dto/FacturaDto/FacturaDto';

class FacturaRepository {

    // Insert Factura
    static async add(factura: Factura) {
        const sql = 'CALL registrar_Factura(?, ?, ?)';
        const values = [factura.id_cliente, factura.id_empleado, factura.fecha_factura];
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
    static async update(factura: Factura, id_factura: number) {
        const sql = 'UPDATE factura SET fecha_factura = ?, id_cliente = ?, id_empleado = ? WHERE id_factura = ?';
        const values = [factura.fecha_factura,factura.id_cliente, factura.id_empleado, id_factura];
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