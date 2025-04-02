import Factura from "../Dto/FacturaDto/FacturaDto";
import FacturaRepository from "../repositories/FacturaRepository";




class FacturaServices {
    
    static async FacturaRegister(factura: Factura) {
        return await FacturaRepository.add(factura);
    }

}

export default FacturaServices;