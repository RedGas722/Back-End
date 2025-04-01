import Pedido from "../Dto/PedidoDto/PedidoDto";
import PedidoRepository from "../repositories/PedidoRepository";



class PedidoServices {
    
    static async PedidoRegister(pedido: Pedido) {
        return await PedidoRepository.add(pedido);
    }

}

export default PedidoServices;