import PedidoProducto from "../Dto/PedidoProductoDto/PedidoProductoDto";
import PedidoProductoRepository from "../repositories/PedidoProductoRepository";



class PedidoProductoServices {
    
    static async PedidoProductoRegister(pedidoProducto: PedidoProducto) {
        return await PedidoProductoRepository.add(pedidoProducto);
    }

}

export default PedidoProductoServices;