import db from '../config/config-db';
import Categoria from '../Dto/CategoriaDto/CategoriaDto';

class CategoriaRepository {

    // Insert Categoria
    static async add(categoria: Categoria) {
        const sql = 'INSERT INTO categoria (nombre_categoria) VALUES (?)';
        const values = [categoria.nombre_categoria];
        return db.execute(sql, values);
    }

    // Get Categoria
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM categoria');
        return rows;
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const safePage = parseInt(String(page), 10) || 1;
        const safeLimit = parseInt(String(limit), 10) || 10;
        const offset = (safePage - 1) * safeLimit;

        const sql = `
            SELECT * FROM categoria
            ORDER BY id_categoria DESC
            LIMIT ${safeLimit} OFFSET ${offset}
        `;

        const [rows] = await db.query(sql);

        // Obtener total de categorías
        const [countRows]: any = await db.execute(`SELECT COUNT(*) as total FROM categoria`);
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

    static async getByName(nombre_categoria: string) {
        const sql = 'SELECT * FROM categoria WHERE nombre_categoria = ?';
        const values = [nombre_categoria];
        const [rows]:any = await db.execute(sql, values);
        return rows[0]; 
    }

    // Update Categoria
    static async update(categoria: Categoria, nombre_categoria: string) {
        const sql = 'UPDATE categoria SET nombre_categoria = ? WHERE nombre_categoria = ?';
        const values = [categoria.nombre_categoria, nombre_categoria];
        return db.execute(sql, values);
    }

    // Delete Categoria
    static async delete(nombre_categoria: string) {
        const sql = 'DELETE FROM categoria WHERE nombre_categoria = ?';
        const values = [nombre_categoria];
        return db.execute(sql, values);
    }
}

export default CategoriaRepository;