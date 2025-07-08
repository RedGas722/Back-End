import TecnicoRepository from '../repositories/TecnicoRepository';
import Tecnico from '../Dto/TecnicoDto/TecnicoDto';
import generateHash from '../Helpers/generateHash';
import AuthTecnico from '../Dto/TecnicoDto/TecnicoAuthDto';
import TecnicoNI from '../Dto/TecnicoDto/TecnicoNIDto';

class TecnicoServices {

    // Tecnico Register
    static async TecnicoRegister(tecnico: Tecnico) {
        try {
            tecnico.contraseña_tecnico = await generateHash(tecnico.contraseña_tecnico);
            return await TecnicoRepository.add(tecnico);
        } catch (error) {
            console.error("Error in the register service:", error);
            throw error;
        }
    }

    // Tecnico Login
    static async login(auth: AuthTecnico) {
        return await TecnicoRepository.login(auth);
    }

    // Tecnico Update
    static async TecnicoUpdate(tecnico: Tecnico, correo_tecnico: string) {
        tecnico.contraseña_tecnico = await generateHash(tecnico.contraseña_tecnico);
        return await TecnicoRepository.update(tecnico, correo_tecnico);
    }

    // Tecnico Data Update
    static async TecnicoDataUpdate(tecnico: Tecnico, correo_tecnico: string) {
        return await TecnicoRepository.DataUpdate(tecnico, correo_tecnico);
    }

    // Tecnico Data Update NI
    static async TecnicoDataUpdateNI(tecnico: TecnicoNI, correo_tecnico: string) {
        return await TecnicoRepository.DataUpdateNI(tecnico, correo_tecnico);
    }

    // Tecnico Delete
    static async TecnicoDelete(correo_tecnico: string) {
        return await TecnicoRepository.delete(correo_tecnico);
    }

    static async getbyEmail(correo_tecnico: string) {
        return await TecnicoRepository.getByEmail(correo_tecnico);
    }

    static async getAllTecnicos() {
        return await TecnicoRepository.getAll();
    }

    static async getAllPaginated(page: number, limit: number) {
        return await TecnicoRepository.getAllPaginated(page, limit);
    }

    static async getAllEmails() {
        return await TecnicoRepository.getAllEmails();
    }

    static async TecnicoEmail(correo_tecnico: string) {
        return await TecnicoRepository.email(correo_tecnico);
    }

    static async TecnicoChangePassword(id_tecnico: number, contraseña_tecnico: string) {
        contraseña_tecnico = await generateHash(contraseña_tecnico);
        return await TecnicoRepository.changePassword(id_tecnico, contraseña_tecnico);
    }
}


export default TecnicoServices;
