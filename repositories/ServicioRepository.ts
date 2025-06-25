import db from '../config/config-db';
import Servicio from '../Dto/ServicioDto/ServicioDto';

class ServicioRepository {

    // Insert Servicio
    static async add(servicio: Servicio) {
        const sql = 'INSERT INTO servicio (nombre_servicio, descripcion_servicio, precio_servicio) VALUES (?, ?, ?)';
        const values = [servicio.nombre_servicio, servicio.descripcion_servicio, servicio.precio_servicio];
        return db.execute(sql, values);
    }

    // Get Servicio
    static async getAll() {
        const sql = 'SELECT * FROM servicio';
        const [rows] = await db.execute(sql);
        return rows;
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const offset = (page - 1) * limit;

        const sql = `SELECT * FROM servicio ORDER BY id_servicio DESC LIMIT ? OFFSET ?`;
        const countSql = `SELECT COUNT(*) as total FROM servicio`;

        const [rows] = await db.execute(sql, [limit, offset]);
        const [countRows]: any = await db.execute(countSql);

        const totalItems = countRows[0].total;
        const totalPages = Math.ceil(totalItems / limit);

        return {
            currentPage: page,
            totalPages,
            totalItems,
            itemsPerPage: limit,
            data: rows,
        };
    }

    static async getByName(nombre_servicio: string) {
        const sql = 'SELECT * FROM servicio WHERE nombre_servicio = ?';
        const values = [nombre_servicio];
        const [rows] = await db.execute(sql, values);
        return rows;
    }

    // Update Servicio
    static async update(servicio: Servicio, nuevo_nombre_servicio: string) {
        const sql = 'UPDATE servicio SET nombre_servicio = ?, descripcion_servicio = ?, precio_servicio = ? WHERE nombre_servicio = ?';
        const values = [nuevo_nombre_servicio, servicio.descripcion_servicio, servicio.precio_servicio, servicio.nombre_servicio];
        return db.execute(sql, values);
    }

    // Delete Servicio
    static async delete(nombre_servicio: string) {
        const sql = 'DELETE FROM servicio WHERE nombre_servicio = ?';
        const values = [nombre_servicio];
        return db.execute(sql, values);
    }
}

export default ServicioRepository;