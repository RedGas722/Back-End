import db from '../config/config-db';
import Servicio from '../Dto/ServicioDto/ServicioDto';

class ServicioRepository {

    // Insert Servicio
    static async add(servicio: Servicio) {
        const sql = 'INSERT INTO servicio (nombre_servicio, descripcion_servicio, precio_servicio, precio_total) VALUES (?, ?, ?, ?)';
        const values = [servicio.nombre_servicio, servicio.descripcion_servicio, servicio.precio_servicio, servicio.precio_total];
        return db.execute(sql, values);
    }

    // Get Servicio
    static async getAll() {
        const sql = 'SELECT * FROM servicio';
        return db.execute(sql);
    }

    static async getByName(nombre_servicio: string) {
        const sql = 'SELECT * FROM servicio WHERE nombre_servicio = ?';
        const values = [nombre_servicio];
        return db.execute(sql, values);
    }

    // Update Servicio
    static async update(servicio: Servicio) {
        const sql = 'UPDATE servicio SET nombre_servicio = ?, descripcion_servicio = ?, precio_servicio = ?, precio_total = ? WHERE nombre_servicio = ?';
        const values = [servicio.nombre_servicio, servicio.descripcion_servicio, servicio.precio_servicio, servicio.precio_total, servicio.nombre_servicio];
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