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
    static async AdministradorUpdate(administrador: Administrador, new_correo_admin: string){
        administrador.contraseña_admin = await generateHash(administrador.contraseña_admin);
        return await AdministradorRepository.update(administrador, new_correo_admin);
    }

    //LOGIN
    static async AdministradorLogin(auth: AuthAdministrador) {
        return await AdministradorRepository.login(auth);
    }

    static async AdministradorDelete(correo_admin: string) {
        return await AdministradorRepository.delete(correo_admin);
    }
}

export default AdministradorServices;