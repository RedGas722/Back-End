import Contrato from "../Dto/ContratoDto/ContratoDto";
import ContratoDataDto from "../Dto/ContratoDto/ContratoDataDto";
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
    static async ContratoDelete(id_empleado: number) {
        return await ContratoRepository.delete(id_empleado);
    }

    //Contrato Data Update (sin id_admin ni id_empleado)
    static async ContratoDataUpdate(contrato: ContratoDataDto, id_empleado: number) {
        return await ContratoRepository.DataUpdate(contrato, id_empleado);
    }

    static async ContratoGet(id_empleado: number) {
        return await ContratoRepository.getById(id_empleado);
    }
    static async ContratoGetAll() {
        return await ContratoRepository.getAll();
    }

}

export default ContratoServices;