import AdministradorRepository from '../repositories/AdministradorRepository';
import Administrador from '../Dto/AdministradorDto/AdministradorDto';
import generateHash from '../Helpers/generateHash';
import AuthAdministrador from '../Dto/AdministradorDto/AdministradorAuthDto';


class AdministradorServices {
    
    static async AdministradorRegister(administrador: Administrador) {
        administrador.contraseña_admin = await generateHash(administrador.contraseña_admin);
        return await AdministradorRepository.add(administrador);
    }

    static async AdministradorLogin(auth: AuthAdministrador) {
        return await AdministradorRepository.login(auth);
    }

    static async AdministradorDelete(correo_admin: string) {
        return await AdministradorRepository.delete(correo_admin);
    }
}

export default AdministradorServices;