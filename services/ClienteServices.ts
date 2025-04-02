import ClienteRepository from '../repositories/ClienteRepository';
import Cliente from '../Dto/ClienteDto/ClienteDto';
import generateHash from '../Helpers/generateHash';
import AuthCliente from '../Dto/ClienteDto/ClienteAuthDto';


class ClienteServices {
    
    static async ClienteRegister(cliente: Cliente) {
        try{
        cliente.contraseña_cliente = await generateHash(cliente.contraseña_cliente);
        return await ClienteRepository.add(cliente);
        }
        catch (error) {
            console.error("Error en el servicio de registro:", error);
            throw error;
        }
    }

    static async ClienteLogin(auth: AuthCliente) {
        return await ClienteRepository.login(auth);
    }
}

export default ClienteServices;