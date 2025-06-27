import Categoria from "../Dto/CategoriaDto/CategoriaDto";
import CategoriaRepository from "../repositories/CategoriaRepository";



class CategoriaServices {
    
    //Categoria Register
    static async CategoriaRegister(categoria: Categoria) {
        return await CategoriaRepository.add(categoria);
    }

    //Categoria Get
    static async CategoriaGet(nombre_categoria: string) {
        return await CategoriaRepository.getByName(nombre_categoria);
    }

    static async GetAllCategorias() {
        return await CategoriaRepository.getAll();
    }

    static async getAllPaginated(page: number, limit: number) {
        return await CategoriaRepository.getAllPaginated(page, limit);
    }
    
    //Categoria Update
    static async CategoriaUpdate(categoria: Categoria, nombre_categoria: string) {
        return await CategoriaRepository.update(categoria, nombre_categoria);
    }

    //Categoria Delete
    static async CategoriaDelete(nombre_categoria: string) {
        return await CategoriaRepository.delete(nombre_categoria);
    }

    static async CategoriaByName(nombre_categoria: string) {
        return await CategoriaRepository.getByName(nombre_categoria);
    }

    static async getAllNames() {
        return await CategoriaRepository.getAllNames();
    }
}

export default CategoriaServices;