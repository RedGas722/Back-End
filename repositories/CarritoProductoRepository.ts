import db from '../config/config-db';
import CarritoProducto from '../Dto/CarritoProductoDto/CarritoProductoDto';

class CarritoProductoRepository{

    // Insert CarritoProducto
    static async add(carritoProducto: CarritoProducto){
        const sql = 'INSERT INTO carrito_producto (id_carrito, id_producto) VALUES (?, ?)';
        const values = [carritoProducto.id_carrito, carritoProducto.id_producto];
        return db.execute(sql, values);
    }

    // Get CarritoProducto

    static async getAll(){
        const sql = 'SELECT * FROM carrito_producto';
        return db.execute(sql);
    }

    static async getById(id_producto: number){
        const sql = 'SELECT * FROM carrito_producto WHERE id_producto = ?';
        const values = [id_producto];
        return db.execute(sql, values);
    }

    // Delete CarritoProducto

    static async delete(id_carritoProducto: number){
        const sql = 'DELETE FROM carrito_producto WHERE id_carrito_producto = ?';
        const values = [id_carritoProducto];
        return db.execute(sql, values);
    }
}

export default CarritoProductoRepository;