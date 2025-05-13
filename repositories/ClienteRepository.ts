import db from '../config/config-db';
import Cliente from '../Dto/ClienteDto/ClienteDto';
import bcrypt from 'bcryptjs';
import AuthCliente from '../Dto/ClienteDto/ClienteAuthDto';

class ClienteRepository {

    // Insert Cliente
    static async add(cliente: Cliente) {
        const sql = 'INSERT INTO cliente (nombre_cliente, correo_cliente, telefono_cliente, direccion_cliente, contraseña_cliente) VALUES (?, ?, ?, ?, ?)';
        const values = [cliente.nombre_cliente, cliente.correo_cliente, cliente.telefono_cliente, cliente.direccion_cliente, cliente.contraseña_cliente];
        return db.execute(sql, values);
    }

    // Get Cliente
    static async getAll() {
        const sql = 'SELECT * FROM cliente';
        return db.execute(sql);
    }

    // Get Cliente by email
    static async getByEmail(correo_cliente: string){
        const sql = 'SELECT * FROM cliente WHERE correo_cliente = ?';
        const values = [correo_cliente];
        const [rows] = await db.execute(sql, values);
        return rows; 

    }

    // Update Cliente
    static async update(cliente: Cliente, correo_cliente: string){
        const sql = 'UPDATE cliente SET nombre_cliente = ?, correo_cliente = ?, telefono_cliente = ?, direccion_cliente = ?, contraseña_cliente = ? WHERE correo_cliente = ?';
        const values = [cliente.nombre_cliente, cliente.correo_cliente, cliente.telefono_cliente, cliente.direccion_cliente, cliente.contraseña_cliente, correo_cliente];
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
            return {logged: true, status: "Successful authentication", id: result[0][0].id_cliente, name: result[0][0].nombre_cliente, email: result[0][0].correo_cliente, telefono: result[0][0].telefono_cliente, direccion: result[0][0].direccion_cliente };
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