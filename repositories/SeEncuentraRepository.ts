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

    try {
      // Verificar si ya existe la relación exacta
      const [rows]: any = await db.execute(
        `SELECT * FROM se_encuentra WHERE id_producto = ? AND id_categoria = ?`,
        [id_producto, id_categoria]
      );

      if (!Array.isArray(rows)) {
        throw new Error('El resultado de la verificación no es una lista de filas válida');
      }

      if (rows.length > 0) {
        // Devuelve un array con objeto simulando affectedRows = 0 para que el service no falle
        return [ { affectedRows: 0 }, undefined ];
      }

      // Eliminar relación actual que no sea "Ofertas"
      const sqlDelete = `
        DELETE FROM se_encuentra
        WHERE id_producto = ? AND id_categoria IN (
          SELECT id_categoria FROM categoria WHERE nombre_categoria != ?
        )
      `;
      await db.execute(sqlDelete, [id_producto, 'Ofertas']);

      // Insertar nueva relación y devolver resultado de add (que es [result, fields])
      return this.add(seEncuentra);

    } catch (error) {
      console.error('Error en updateRelacion:', error);
      throw new Error('No se pudo actualizar la relación producto-categoría.');
    }
  }

  // Eliminar relación
  static async delete(seEncuentra: SeEncuentra) {
    const sql = 'DELETE FROM se_encuentra WHERE id_categoria = ? AND id_producto = ?';
    const values = [seEncuentra.id_categoria, seEncuentra.id_producto];
    return db.execute(sql, values);
  }

  // Obtener relación
  static async get(seEncuentra: SeEncuentra) {
    const sql = 'SELECT * FROM se_encuentra WHERE id_categoria = ? AND id_producto = ?';
    const values = [seEncuentra.id_categoria, seEncuentra.id_producto];
    return db.execute(sql, values);
  }
}

export default SeEncuentraRepository;
