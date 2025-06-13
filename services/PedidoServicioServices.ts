import PedidoServicio from "../Dto/PedidoServicioDto/PedidoServicioDto";
import PedidoServicioRepository from "../repositories/PedidoServicioRepository";



class PedidoServicioServices {
    
    static async PedidoServicioRegister(pedidoServicio: PedidoServicio) {
        return await PedidoServicioRepository.add(pedidoServicio);
    }

    static async PedidoServicioGet(id_factura: number) {
        return await PedidoServicioRepository.getById(id_factura);
    }

    static async PedidoServicioGetAll() {
        return await PedidoServicioRepository.getAll();
    }

}

export default PedidoServicioServices;