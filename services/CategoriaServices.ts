import Categoria from "../Dto/CategoriaDto/CategoriaDto";
import CategoriaRepository from "../repositories/CategoriaRepositoryDto";



class CategoriaServices {
    
    //Categoria Register
    static async CategoriaRegister(categoria: Categoria) {
        return await CategoriaRepository.add(categoria);
    }
    
    //Categoria Update
    static async CategoriaUpdate(categoria: Categoria, new_nombre_categoria: string) {
        return await CategoriaRepository.update(categoria, new_nombre_categoria);
    }

    //Categoria Delete
    static async CategoriaDelete(nombre_categoria: string) {
        return await CategoriaRepository.delete(nombre_categoria);
    }

}

export default CategoriaServices;