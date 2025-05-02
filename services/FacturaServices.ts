import Factura from "../Dto/FacturaDto/FacturaDto";
import FacturaRepository from "../repositories/FacturaRepository";




class FacturaServices {
    
    static async FacturaRegister(factura: Factura) {
        return await FacturaRepository.add(factura);
    }

    static async FacturaDelete(id_factura: number) {
        return await FacturaRepository.delete(id_factura);
    }
    static async FacturaGet(id_cliente: number) {
        return await FacturaRepository.getById(id_cliente);
    }
    static async FacturaGetAll() {
        return await FacturaRepository.getAll();
    }

}

export default FacturaServices;