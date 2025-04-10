import ClienteRepository from '../repositories/ClienteRepository';
import Cliente from '../Dto/ClienteDto/ClienteDto';
import generateHash from '../Helpers/generateHash';
import AuthCliente from '../Dto/ClienteDto/ClienteAuthDto';


class ClienteServices {
    
    static async ClienteRegister(cliente: Cliente) {
        cliente.contraseña_cliente = await generateHash(cliente.contraseña_cliente);
        return await ClienteRepository.add(cliente);
    }

    static async ClienteLogin(auth: AuthCliente) {
        return await ClienteRepository.login(auth);
    }

    static async ClienteDelete(correo_cliente : string) {
        return await ClienteRepository.delete(correo_cliente);
    }

    static async ClienteUpdate(cliente : Cliente, nuevo_correo_cliente: string) {
        cliente.contraseña_cliente = await generateHash(cliente.contraseña_cliente);
        return await ClienteRepository.update(cliente, nuevo_correo_cliente);
    }
}


export default ClienteServices;