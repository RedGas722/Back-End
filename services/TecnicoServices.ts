import TecnicoRepository from '../repositories/TecnicoRepository';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
import generateHash from '../Helpers/generateHash';
import AuthTecnico from '../Dto/TecnicoDto/TecnicoAuthDto';

class TecnicoServices {

    static async TecnicoRegister(tecnico: Tecnico) {
        try {
            tecnico.contraseña_tecnico = await generateHash(tecnico.contraseña_tecnico);
            return await TecnicoRepository.add(tecnico); 
        } catch (error) {
            console.error("Error in the register service:", error);
            throw error;
        }
    }

    static async login(auth: AuthTecnico) {
        return await TecnicoRepository.login(auth); 
    }
}

export default TecnicoServices;
