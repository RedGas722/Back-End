import Categoria from "../Dto/CategoriaDto/CategoriaDto";
import CategoriaRepository from "../repositories/CategoriaRepositoryDto";



class CategoriaServices {
    
    static async CategoriaRegister(categoria: Categoria) {
        return await CategoriaRepository.add(categoria);
    }

}

export default CategoriaServices;