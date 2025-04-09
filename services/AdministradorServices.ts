import AdministradorRepository from '../repositories/AdministradorRepository';
import Administrador from '../Dto/AdministradorDto/AdministradorDto';
import generateHash from '../Helpers/generateHash';
import AuthAdministrador from '../Dto/AdministradorDto/AdministradorAuthDto';


class AdministradorServices {

    //REGISTER
    static async AdministradorRegister(administrador: Administrador) {
        administrador.contraseña_admin = await generateHash(administrador.contraseña_admin);
        return await AdministradorRepository.add(administrador);
    }

    //UPDATE
    static async AdministradorUpdate(administrador: Administrador){
        return await AdministradorRepository.update(administrador);
    }

    //LOGIN
    static async AdministradorLogin(auth: AuthAdministrador) {
        return await AdministradorRepository.login(auth);
    }
    
}

export default AdministradorServices;