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
        const sql = 'SELECT * FROM categoria';
        return db.execute(sql);
    }

    static async getByName(nombre_categoria: string) {
        const sql = 'SELECT * FROM categoria WHERE nombre_categoria = ?';
        const values = [nombre_categoria];
        return db.execute(sql, values);
    }

    // Update Categoria
    static async update(categoria: Categoria) {
        const sql = 'UPDATE categoria SET nombre_categoria = ? WHERE nombre_categoria = ?';
        const values = [categoria.nombre_categoria, categoria.nombre_categoria];
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