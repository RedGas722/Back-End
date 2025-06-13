import db from '../config/config-db';
import Factura from '../Dto/FacturaDto/FacturaDto';

class FacturaRepository {

    // Insert Factura
    static async add(factura: Factura) {
        const sql = 'INSERT INTO factura (id_cliente, id_empleado, fecha_factura, total) VALUES (?, ?, ?, ?)';
        const values = [factura.id_cliente, factura.id_empleado, factura.fecha_factura, factura.total];
        
        const [result]: any = await db.execute(sql, values);  // <-- destructuramos el result
        
        return result.insertId;  // <-- retornamos solo el id generado
    }

    // Get Factura
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM factura');
        return rows;
    }

    static async getById(id_factura: number) {
        const sql = 'SELECT * FROM factura WHERE id_factura = ?';
        const values = [id_factura];
        const [rows] = await db.execute(sql, values);
        return rows;
    }

    // Update Factura
    static async update(estado_factura: string, id_factura: number) {
        const sql = 'UPDATE factura SET estado_factura = ? WHERE id_factura = ?';
        const values = [estado_factura, id_factura];
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