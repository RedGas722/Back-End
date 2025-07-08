import AdministradorRepository from '../repositories/AdministradorRepository';
import Administrador from '../Dto/AdministradorDto/AdministradorDto';
import generateHash from '../Helpers/generateHash';
import AuthAdministrador from '../Dto/AdministradorDto/AdministradorAuthDto';
import AdministradorDataDto from '../Dto/AdministradorDto/AdministradorDataDto';


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

    // Data Update sin contraseña
    static async AdministradorDataUpdate(administrador: AdministradorDataDto, correo_admin: string) {
        return await AdministradorRepository.AdministradorDataUpdate(administrador, correo_admin);
    }

    static async AdministradorDelete(correo_admin: string) {
        return await AdministradorRepository.delete(correo_admin);
    }
    static async AdministradorGet(correo_admin: string){
        return await AdministradorRepository.getByEmail(correo_admin);
    }

    static async AdministradorGetAll() {
        return await AdministradorRepository.getAll();
    }

    static async getAllPaginated(page: number, limit: number) {
        return await AdministradorRepository.getAllPaginated(page, limit);
    }

    static async getAllEmails() {
        return await AdministradorRepository.getAllEmails();
    }

    static async AdminEmail(correo_admin: string) {
        return await AdministradorRepository.email(correo_admin);
    }
}

export default AdministradorServices;