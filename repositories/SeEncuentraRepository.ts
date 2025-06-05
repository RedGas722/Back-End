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

    // Buscar relaciones que no estén en categoría "Ofertas"
    const sqlCheck = `
      SELECT se.* FROM se_encuentra se
      JOIN categorias c ON se.id_categoria = c.id_categoria
      WHERE se.id_producto = ? AND c.nombre != ?
    `;
    const [rows]: any = await db.execute(sqlCheck, [id_producto, 'Ofertas']);

    if (rows.length > 0) {
      // Actualizar esas filas (puede actualizar varias)
      const sqlUpdate = `
        UPDATE se_encuentra SET id_categoria = ?
        WHERE id_producto = ? AND id_categoria IN (
          SELECT c.id_categoria FROM categorias c WHERE c.nombre != ?
        )
      `;
      return db.execute(sqlUpdate, [id_categoria, id_producto, 'Ofertas']);
    } else {
      // Si no existe ninguna relación que no sea "Ofertas", insertar la nueva relación
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
