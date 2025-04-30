import Factura from "../Dto/FacturaDto/FacturaDto";
import FacturaRepository from "../repositories/FacturaRepository";




class FacturaServices {
    
    //Factura Register
    static async FacturaRegister(factura: Factura) {
        return await FacturaRepository.add(factura);
    }

    //Factura Update
    static async FacturaUpdate(factura: Factura, id_factura: number) {
        return await FacturaRepository.update(factura, id_factura);
    }

}

export default FacturaServices;