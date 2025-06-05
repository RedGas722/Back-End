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

    // Paso 1: Verificar si ya existe la relación exacta
    const sqlCheckExists = `
      SELECT * FROM se_encuentra
      WHERE id_producto = ? AND id_categoria = ?
    `;
    const [existente]: any = await db.execute(sqlCheckExists, [id_producto, id_categoria]);

    if (existente.length > 0) {
      // Ya existe la relación exacta, no se necesita actualizar
      return { message: 'La relación ya existe, no se realizó ninguna modificación.' };
    }

    // Paso 2: Eliminar relación actual que no sea "Ofertas"
    const sqlDelete = `
      DELETE FROM se_encuentra
      WHERE id_producto = ? AND id_categoria IN (
        SELECT id_categoria FROM categoria WHERE nombre != ?
      )
    `;
    await db.execute(sqlDelete, [id_producto, 'Ofertas']);

    // Paso 3: Insertar nueva relación
    return this.add(seEncuentra);
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
