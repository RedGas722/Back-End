import Contrato from "../Dto/ContratoDto/ContratoDto";
import ContratoRepository from "../repositories/ContratoRepository";




class ContratoServices {
    
    static async ContratoRegister(contrato: Contrato) {
        return await ContratoRepository.add(contrato);
    }

    static async ContratoDelete(id_contrato: number) {
        return await ContratoRepository.delete(id_contrato);
    }

}

export default ContratoServices;