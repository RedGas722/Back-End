import Contrato from "../Dto/ContratoDto/ContratoDto";
import ContratoRepository from "../repositories/ContratoRepository";




class ContratoServices {
    
    //Contrato Register
    static async ContratoRegister(contrato: Contrato) {
        return await ContratoRepository.add(contrato);
    }

    //Contrato Update
    static async ContratoUpdate(contrato: Contrato, id_contrato: number) {
        return await ContratoRepository.update(contrato, id_contrato);
    }

    //Contrato Delete
    static async ContratoDelete(id_contrato: number) {
        return await ContratoRepository.delete(id_contrato);
    }

}

export default ContratoServices;