import Factura from "../Dto/FacturaDto/FacturaDto";
import FacturaRepository from "../repositories/FacturaRepository";




class FacturaServices {
    
    //Factura Register
    static async FacturaRegister(factura: Factura) {
        return await FacturaRepository.add(factura);
    }

    //Factura Update
    static async FacturaUpdate(estado_factura: string, id_factura: number) {
        return await FacturaRepository.update(estado_factura, id_factura);
    }
    static async FacturaDelete(id_factura: number) {
        return await FacturaRepository.delete(id_factura);
    }
    static async FacturaGet(id_factura: number) {
        return await FacturaRepository.getById(id_factura);
    }
    static async FacturaGetAll() {
        return await FacturaRepository.getAll();
    }
    static async getAllPaginated(page: number, limit: number) {
        return await FacturaRepository.getAllPaginated(page, limit);
    }
}

export default FacturaServices;