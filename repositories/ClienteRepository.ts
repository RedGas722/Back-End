import db from '../config/config-db';
import Cliente from '../Dto/ClienteDto/ClienteDto';
import bcrypt from 'bcryptjs';
import AuthCliente from '../Dto/ClienteDto/ClienteAuthDto';
import DataCliente from '../Dto/ClienteDto/DataClienteDto';

class ClienteRepository {

    // Insert Cliente
    static async add(cliente: Cliente) {
        const sql = 'INSERT INTO cliente (nombre_cliente, correo_cliente, telefono_cliente, direccion_cliente, contraseña_cliente) VALUES (?, ?, ?, ?, ?)';
        const values = [cliente.nombre_cliente, cliente.correo_cliente, cliente.telefono_cliente, cliente.direccion_cliente, cliente.contraseña_cliente];
        return db.execute(sql, values);
    }

    // Get Cliente
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM cliente');
        return rows;
    }

    static async getAllPaginated(page: number = 1, limit: number = 10) {
        const offset = (page - 1) * limit;

        const sql = `SELECT * FROM cliente ORDER BY id_cliente DESC LIMIT ? OFFSET ?`;
        const countSql = `SELECT COUNT(*) as total FROM cliente`;

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

    // Get Cliente by email
    static async getByEmail(correo_cliente: string) {
        const sql = 'SELECT * FROM cliente WHERE correo_cliente = ?';
        const values = [correo_cliente];
        const [rows]: any = await db.execute(sql, values);
        return rows[0];
    }


    // Update Cliente
    static async update(cliente: Cliente, correo_cliente: string){
        const sql = 'UPDATE cliente SET nombre_cliente = ?, correo_cliente = ?, telefono_cliente = ?, direccion_cliente = ?, contraseña_cliente = ? WHERE correo_cliente = ?';
        const values = [cliente.nombre_cliente, cliente.correo_cliente, cliente.telefono_cliente, cliente.direccion_cliente, cliente.contraseña_cliente, correo_cliente];
        return db.execute(sql, values);
    }

    // Update DataCliente 
    static async updateData(dataCliente: DataCliente, correo_cliente: string){
        const sql = 'UPDATE cliente SET nombre_cliente = ?, correo_cliente = ?, telefono_cliente = ?, direccion_cliente = ? WHERE correo_cliente = ?';
        const values = [dataCliente.nombre_cliente, dataCliente.correo_cliente, dataCliente.telefono_cliente, dataCliente.direccion_cliente, correo_cliente];
        return db.execute(sql, values);
    }

    // Delete Cliente
    static async delete(correo_cliente: string) {
        const sql = 'DELETE FROM cliente WHERE correo_cliente = ?';
        const values = [correo_cliente];
        return db.execute(sql, values);
    }

    // login
    static async login(auth: AuthCliente){
        const sql = 'SELECT * FROM cliente WHERE correo_cliente=?';
        const values = [auth.correo_cliente];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.contraseña_cliente, result[0][0].contraseña_cliente);
          if (isPasswordValid){
            return {
              logged: true,
              status: "Successful authentication",
              id: result[0][0].id_cliente,
              name: result[0][0].nombre_cliente,
              email: result[0][0].correo_cliente,
              telefono: result[0][0].telefono_cliente,
              direccion: result[0][0].direccion_cliente,
            };
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return { logged: false, status: "Invalid username or password" };
    }

    static async email(correo_cliente: string) {
        const sql = 'SELECT * FROM cliente WHERE correo_cliente=?';
        const values = [correo_cliente];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            return { 
                logged: true, 
                status: "Successful authentication", 
                id: result[0][0].id_cliente, 
                name: result[0][0].nombre_cliente, 
                email: result[0][0].correo_cliente, 
                telefono: result[0][0].telefono_cliente };
        }
        return { logged: false, status: "Invalid email" };
    }

    // Change Password
    static async changePassword(id_cliente: number, contraseña_cliente: string) {
        const sql = 'UPDATE cliente SET contraseña_cliente = ? WHERE id_cliente = ?';
        const values = [contraseña_cliente, id_cliente];
        return db.execute(sql, values);
    }
}

export default ClienteRepository;