import ClienteRepository from '../repositories/ClienteRepository';
import Cliente from '../Dto/ClienteDto/ClienteDto';
import generateHash from '../Helpers/generateHash';
import AuthCliente from '../Dto/ClienteDto/ClienteAuthDto';


class ClienteServices {
    
    //Cliente Register
    static async ClienteRegister(cliente: Cliente) {
        cliente.contraseña_cliente = await generateHash(cliente.contraseña_cliente);
        return await ClienteRepository.add(cliente);
    }

    //Cliente Login
    static async ClienteLogin(auth: AuthCliente) {
        return await ClienteRepository.login(auth);
    }

    //Cliente Delete
    static async ClienteDelete(correo_cliente : string) {
        return await ClienteRepository.delete(correo_cliente);
    }

    //Cliente Update
    static async ClienteUpdate(cliente : Cliente, correo_cliente: string) {
        cliente.contraseña_cliente = await generateHash(cliente.contraseña_cliente);
        return await ClienteRepository.update(cliente, correo_cliente);
    }

    static async ClienteEmail(correo_cliente: string) {
        return await ClienteRepository.email(correo_cliente);
    }


    //Cliente Change Password
    static async ClienteChangePassword(id_cliente: number, contraseña_cliente: string) {
        contraseña_cliente = await generateHash(contraseña_cliente);
        return await ClienteRepository.changePassword(id_cliente, contraseña_cliente);
    }


    //Cliente Get
    static async GetCliente(correo_cliente: string) {
        return await ClienteRepository.getByEmail(correo_cliente);
    }

    //Cliente Get All
    static async GetAllClientes() {
        return await ClienteRepository.getAll();
    }
}


export default ClienteServices;