import PedidoServicio from "../Dto/PedidoServicioDto/PedidoServicioDto";
import PedidoServicioRepository from "../repositories/PedidoServicioRepository";



class PedidoServicioServices {
    
    static async PedidoServicioRegister(pedidoServicio: PedidoServicio) {
        return await PedidoServicioRepository.add(pedidoServicio);
    }

    static async PedidoServicioGet(id_cliente: number) {
        return await PedidoServicioRepository.getById(id_cliente);
    }

    static async PedidoServicioGetAll() {
        return await PedidoServicioRepository.getAll();
    }

    static async getAllPaginated(page: number, limit: number) {
        return await PedidoServicioRepository.getAllPaginated(page, limit);
    }

}

export default PedidoServicioServices;