import db from '../config/config-db';
import Contrato from '../Dto/ContratoDto/ContratoDto';

class ContratoRepository {

    // Insert Contrato
    static async add(contrato: Contrato) {
        const sql = 'INSERT INTO contrato (fecha_contrato, duracion_contrato, tipo_contrato, salario, id_admin, id_empleado) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [contrato.fecha_contrato, contrato.duracion_contrato, contrato.tipo_contrato, contrato.salario, contrato.id_admin, contrato.id_empleado];
        return db.execute(sql, values);
    }

    // Get Contrato
    static async getAll() {
        const sql = 'SELECT * FROM contrato';
        return db.execute(sql);
    }

    static async getById(id_contrato: number) {
        const sql = 'SELECT * FROM contrato WHERE id_contrato = ?';
        const values = [id_contrato];
        return db.execute(sql, values);
    }

    // Update Contrato
    static async update(contrato: Contrato) {
        const sql = 'UPDATE contrato SET duracion_contrato = ?, tipo_contrato = ?, salario = ?, id_Admin = ? WHERE fecha_contrato = ?';
        const values = [contrato.duracion_contrato, contrato.tipo_contrato, contrato.salario, contrato.id_admin, contrato.id_empleado, contrato.fecha_contrato];
        return db.execute(sql, values);
    }

    // Delete Contrato
    static async delete(id_contrato: number) {
        const sql = 'DELETE FROM contrato WHERE id_contrato = ?';
        const values = [id_contrato];
        return db.execute(sql, values);
    }
}

export default ContratoRepository;