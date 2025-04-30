import db from '../config/config-db';
import CarritoServicio from '../Dto/CarritoServicioDto/CarritoServicioDto';

class CarritoServicioRepository{

    // Insert CarritoServicio
    static async add(carritoServicio: CarritoServicio){
        const sql = 'INSERT INTO carrito_servicio (id_carrito, id_servicio) VALUES (?, ?)';
        const values = [carritoServicio.id_carrito, carritoServicio.id_servicio];
        return db.execute(sql, values);
    }

    // Get CarritoServicio
    static async getAll(){
        const sql = 'SELECT * FROM carrito_servicio';
        return db.execute(sql);
    }

    static async getById(id_servicio: number){
        const sql = 'SELECT * FROM carrito_servicio WHERE id_servicio = ?';
        const values = [id_servicio];
        return db.execute(sql, values);
    }

    // // Update CarritoServicio
    // static async update(carritoServicio: CarritoServicio, id_carritoServicio: number){
    //     const sql = 'UPDATE carrito_servicio SET id_carrito = ?, id_servicio = ? WHERE id_carrito_servicio = ?';
    //     const values = [carritoServicio.id_carrito, carritoServicio.id_servicio, id_carritoServicio];
    //     return db.execute(sql, values);
    // }

    // Delete CarritoServicio
    static async delete(id_carritoServicio: number){
        const sql = 'DELETE FROM carrito_servicio WHERE id_carrito_servicio = ?';
        const values = [id_carritoServicio];
        return db.execute(sql, values);
    }
}

export default CarritoServicioRepository;