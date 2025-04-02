import TecnicoRepository from '../repositories/TecnicoRepository';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
import generateHash from '../Helpers/generateHash';
import AuthTecnico from '../Dto/TecnicoDto/authTecnicoDto';

class TecnicoServices {

    static async register(Tecnico: Tecnico) {
        try {
      
            Tecnico.contraseña_tecnico = await generateHash(Tecnico.contraseña_tecnico);
            return await TecnicoRepository.add(Tecnico); 
        } catch (error) {
            console.error("Error in the register service:", error);
            throw error;
        }
    }


    static async login(AuthTecnico: AuthTecnico) {
        return await TecnicoRepository.login(AuthTecnico); 
    }
}

export default TecnicoServices;
