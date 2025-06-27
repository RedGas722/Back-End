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
        const [rows] = await db.execute(sql);
        return rows;
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const safePage = parseInt(String(page), 10) || 1;
        const safeLimit = parseInt(String(limit), 10) || 10;
        const offset = (safePage - 1) * safeLimit;

        const sql = `
            SELECT * FROM contrato
            ORDER BY id_contrato DESC
            LIMIT ${safeLimit} OFFSET ${offset}
        `;

        const countSql = `SELECT COUNT(*) as total FROM contrato`;

        const [rows] = await db.query(sql); // Usamos .query en vez de .execute
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

    static async getById(id_empleado: number) {
        const sql = 'SELECT * FROM contrato WHERE id_empleado = ?';
        const [rows]: any = await db.execute(sql, [id_empleado]);
        return rows.length > 0 ? rows[0] : null;
    }

    // Update Contrato
    static async update(contrato: Contrato, id_contrato: number) {
        const sql = 'UPDATE contrato SET fecha_contrato = ?, duracion_contrato = ?, tipo_contrato = ?, salario = ?, id_Admin = ?, id_empleado = ? WHERE id_contrato = ?';
        const values = [contrato.fecha_contrato, contrato.duracion_contrato, contrato.tipo_contrato, contrato.salario, contrato.id_admin, contrato.id_empleado, id_contrato];
        return db.execute(sql, values);
    }

    // Data Update solo datos relevantes (sin id_admin ni id_empleado)
    static async DataUpdate(contrato: any, id_empleado: number) {
        const sql = 'UPDATE contrato SET fecha_contrato = ?, duracion_contrato = ?, tipo_contrato = ?, salario = ? WHERE id_empleado = ?';
        const values = [
            contrato.fecha_contrato,
            contrato.duracion_contrato,
            contrato.tipo_contrato,
            contrato.salario,
            id_empleado
        ];
        return db.execute(sql, values);
    }

    // Delete Contrato
    static async delete(id_empleado: number) {
        const sql = 'DELETE FROM contrato WHERE id_empleado = ?';
        const values = [id_empleado];
        return db.execute(sql, values);
    }
}

export default ContratoRepository;