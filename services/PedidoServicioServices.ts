import PedidoServicio from "../Dto/PedidoServicioDto/PedidoServicioDto";
import PedidoServicioRepository from "../repositories/PedidoServicioRepository";



class PedidoServicioServices {
    
    static async PedidoServicioRegister(pedidoServicio: PedidoServicio) {
        return await PedidoServicioRepository.add(pedidoServicio);
    }

}

export default PedidoServicioServices;