import Contrato from "../Dto/ContratoDto/ContratoDto";
import ContratoRepository from "../repositories/ContratoRepository";




class ContratoServices {
    
    static async ContratoRegister(contrato: Contrato) {
        return await ContratoRepository.add(contrato);
    }

}

export default ContratoServices;