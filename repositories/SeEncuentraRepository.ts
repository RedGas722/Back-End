import db from '../config/config-db';
import SeEncuentra from '../Dto/SeEncuentraDto/SeEncuentra';

class SeEncuentraRepository {

  // Insertar relación
  static async add(seEncuentra: SeEncuentra) {
    const sql = 'INSERT INTO se_encuentra (id_categoria, id_producto) VALUES (?, ?)';
    const values = [seEncuentra.id_categoria, seEncuentra.id_producto];
    return db.execute(sql, values);
  }

  // Actualizar o insertar relación producto-categoría
  static async updateRelacion(seEncuentra: SeEncuentra) {
    const { id_categoria, id_producto } = seEncuentra;

    // Primero verificamos si existe la relación para el producto
    const sqlCheck = 'SELECT * FROM se_encuentra WHERE id_producto = ?';
    const [rows]: any = await db.execute(sqlCheck, [id_producto]);

    if (rows.length > 0) {
      // Si existe, actualizamos la categoría
      const sqlUpdate = 'UPDATE se_encuentra SET id_categoria = ? WHERE id_producto = ?';
      return db.execute(sqlUpdate, [id_categoria, id_producto]);
    } else {
      // Si no existe, insertamos nueva relación
      return this.add(seEncuentra);
    }
  }

  static async delete(seEncuentra: SeEncuentra) {
    const sql = 'DELETE FROM se_encuentra WHERE id_categoria = ? AND id_producto = ?';
    const values = [seEncuentra.id_categoria, seEncuentra.id_producto];
    return db.execute(sql, values);
  }

  static async get(seEncuentra: SeEncuentra) {
    const sql = 'SELECT * FROM se_encuentra WHERE id_categoria = ? AND id_producto = ?';
    const values = [seEncuentra.id_categoria, seEncuentra.id_producto];
    return db.execute(sql, values);
  }

}

export default SeEncuentraRepository;
