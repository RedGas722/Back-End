import Categoria from "../Dto/CategoriaDto/CategoriaDto";
import CategoriaRepository from "../repositories/CategoriaRepositoryDto";



class CategoriaServices {
    
    static async CategoriaRegister(categoria: Categoria) {
        return await CategoriaRepository.add(categoria);
    }

    static async CategoriaDelete(nombre_categoria: string) {
        return await CategoriaRepository.delete(nombre_categoria);
    }

    static async CategoriaByName(nombre_categoria: string) {
        return await CategoriaRepository.getByName(nombre_categoria);
    }


}

export default CategoriaServices;